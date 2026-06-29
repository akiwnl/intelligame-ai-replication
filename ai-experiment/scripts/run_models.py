#!/usr/bin/env python3
"""Runner: invoca as IAs por API e preenche as pastas de cenario.

Substitui o passo manual #1 de LIMITATIONS-AND-MANUAL-STEPS.md ("invocar as IAs e
colar a saida"). Para cada celula (modelo x nivel) e cada run, monta o prompt do nivel
+ o baseline-project, chama a API do modelo e escreve o index.ts/test.ts gerado em
scenarios/<modelo>/<nivel>/run-NN/src/<func>/.

Usa apenas a stdlib (urllib). Os provedores falam o protocolo compativel com OpenAI
(POST {base_url}/chat/completions, Authorization: Bearer <key>), entao um cliente so
atende Gemini, DeepSeek, Groq, OpenRouter, Mistral, etc.

CONFIG DOS MODELOS  (tudo sobrescrivivel por env; ver MODELS abaixo)
  ai-1  Gemini      base=generativelanguage.../v1beta/openai   model=gemini-2.5-flash                  key=GEMINI_API_KEY
  ai-2  gpt-oss     base=openrouter.ai/api/v1                  model=openai/gpt-oss-120b:free          key=OPENROUTER_API_KEY
  ai-3  Llama 3.3   base=openrouter.ai/api/v1                  model=meta-llama/llama-3.3-70b-instruct:free  key=OPENROUTER_API_KEY

  Cada *_API_KEY aceita VARIAS chaves separadas por virgula -> rodizio automatico quando
  uma estoura a cota (ver call_api). Notas:
  - ai-2 era DeepSeek; trocado por gpt-oss-120b (nao ha mais DeepSeek :free e a API oficial exige saldo).
  - ai-3 saiu do Groq por causa do teto de 12k tokens/min (truncava os 22 arquivos); OpenRouter gera
    tudo de uma vez. Para usar o Groq: AI3_BASE_URL=https://api.groq.com/openai/v1
    AI3_MODEL=llama-3.3-70b-versatile AI3_API_KEY=<chave(s) groq>.

  Sobrescreva qualquer campo com  AI{1,2,3}_BASE_URL / AI{1,2,3}_MODEL / AI{1,2,3}_API_KEY.

USO
  # rodar 1 celula inteira (10 runs) de um modelo+nivel:
  python3 scripts/run_models.py --model ai-3 --level basic --runs 1-10

  # so testar o prompt sem gastar API (mostra tamanho/preview e nao chama nada):
  python3 scripts/run_models.py --model ai-1 --level complete --runs 1 --dry-run

  # rodar tudo (3 modelos x 3 niveis x 10 = 90 chamadas):
  python3 scripts/run_models.py --model all --level all --runs 1-10

OPCOES
  --model ai-1|ai-2|ai-3|all   (repetivel)
  --level basic|intermediate|complete|all
  --runs  "1-10" | "1,3,5" | "7"
  --temperature 0.7            mesma p/ os K runs da celula (variacao vem da amostragem)
  --reset                      restaura os stubs do baseline na pasta antes de escrever
  --dry-run                    monta o prompt e mostra preview; NAO chama a API
  --overwrite                  reescreve mesmo se a pasta ja tiver saida (default: pula)
"""
import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
AIEXP = HERE.parent
BASELINE = AIEXP / "baseline-project"
SCEN = AIEXP / "scenarios"
PROMPTS = AIEXP / "prompts"

FUNCS = ["addDays", "getDate", "getDay", "getDaysInMonth", "getDaysInYear",
         "isAfter", "isBefore", "isEqual", "isFuture", "isPast", "isWeekend"]

# --- config dos modelos (defaults; sobrescrivivel por env) -------------------
def _cfg(slot, base, model, key_env):
    n = slot[-1]  # "1".."3"
    # Multiplas chaves separadas por virgula -> rodizio quando uma estoura a cota.
    raw = os.environ.get(f"AI{n}_API_KEY") or os.environ.get(key_env, "")
    keys = [k.strip() for k in raw.split(",") if k.strip()]
    return dict(
        slot=slot,
        base_url=os.environ.get(f"AI{n}_BASE_URL", base).rstrip("/"),
        model=os.environ.get(f"AI{n}_MODEL", model),
        api_keys=keys,
        key_idx=0,
        key_env=key_env,
    )

MODELS = {
    "ai-1": _cfg("ai-1", "https://generativelanguage.googleapis.com/v1beta/openai",
                 "gemini-2.5-flash", "GEMINI_API_KEY"),
    "ai-2": _cfg("ai-2", "https://openrouter.ai/api/v1", "openai/gpt-oss-120b:free", "OPENROUTER_API_KEY"),
    # Llama 3.3 70B Instruct (MESMO modelo do Groq) servido pelo OpenRouter, que nao tem o
    # teto de 12k tokens/min do Groq free -> gera os 22 arquivos de uma vez, sem truncar.
    # Para usar o Groq: AI3_BASE_URL=https://api.groq.com/openai/v1
    # AI3_MODEL=llama-3.3-70b-versatile AI3_API_KEY="$GROQ_API_KEY" --batch-size 6
    "ai-3": _cfg("ai-3", "https://openrouter.ai/api/v1", "meta-llama/llama-3.3-70b-instruct:free", "OPENROUTER_API_KEY"),
}
LEVELS = ["basic", "intermediate", "complete"]

# --- montagem do prompt ------------------------------------------------------
def prompt_body(level):
    """Le prompts/prompt-<level>.md e devolve so a secao enviada a IA (sem metadados)."""
    txt = (PROMPTS / f"prompt-{level}.md").read_text(encoding="utf-8")
    m = re.search(r"^##\s+Prompt\b.*$", txt, re.MULTILINE)
    return txt[m.start():].strip() if m else txt.strip()

def baseline_context(level):
    """Empacota os arquivos do baseline-project que o operador entregaria a IA.

    O protocolo manual entrega o baseline-project inteiro em toda celula; o que muda
    entre niveis e o TEXTO do prompt, nao os arquivos. Anexamos os fontes (stubs com
    JSDoc, toDate, types, test stubs) sempre; README/main.ts so nos niveis que os citam.
    A pasta documentation/ (MDN offline) e grande; nao e anexada -- o prompt menciona que
    esta disponivel offline (limitacao registrada em LIMITATIONS-AND-MANUAL-STEPS.md)."""
    parts = []
    def add(rel):
        p = BASELINE / rel
        if p.exists():
            parts.append(f"=== {rel} ===\n{p.read_text(encoding='utf-8')}")
    add("src/types.ts")
    add("src/toDate/index.ts")
    for f in FUNCS:
        add(f"src/{f}/index.ts")
        add(f"src/{f}/test.ts")
    if level in ("intermediate", "complete"):
        add("README.md")
        add("main.ts")
    return "\n\n".join(parts)

def output_rules(funcs):
    n = len(funcs)
    lst = ", ".join(funcs)
    return f"""
---

## FORMATO DA RESPOSTA (obrigatorio)

NESTA resposta, implemente e teste APENAS estas {n} funcoes: {lst}.
(O projeto tem outras funcoes; ignore-as nesta resposta.)

Responda APENAS com os {2 * n} arquivos (index.ts e test.ts dessas {n} funcoes), cada um
precedido por uma linha marcadora exatamente neste formato:

### FILE: src/<funcao>/index.ts
<conteudo do arquivo>

### FILE: src/<funcao>/test.ts
<conteudo do arquivo>

Nao escreva explicacoes fora dos arquivos. Pode usar blocos ``` se quiser; eles serao
removidos. Comece direto pela primeira linha "### FILE:".
""".strip()

def build_messages(level, funcs):
    user = "\n\n".join([
        prompt_body(level),
        "## Arquivos do projeto (baseline-project)\n\n" + baseline_context(level),
        output_rules(funcs),
    ])
    return [{"role": "user", "content": user}]

def chunks(seq, size):
    if size <= 0 or size >= len(seq):
        return [list(seq)]
    return [seq[i:i + size] for i in range(0, len(seq), size)]

# --- parsing da resposta -----------------------------------------------------
FILE_RE = re.compile(r"^###\s*FILE:\s*(src/\S+\.ts)\s*$", re.MULTILINE)

def strip_fences(body):
    body = body.strip()
    if body.startswith("```"):
        body = re.sub(r"^```[a-zA-Z]*\n", "", body)
        body = re.sub(r"\n```\s*$", "", body)
    return body.strip() + "\n"

def parse_files(text):
    out = {}
    marks = list(FILE_RE.finditer(text))
    for i, m in enumerate(marks):
        path = m.group(1)
        end = marks[i + 1].start() if i + 1 < len(marks) else len(text)
        out[path] = strip_fences(text[m.end():end])
    return out

# --- chamada a API (OpenAI-compatible) ---------------------------------------
RETRYABLE = {429, 500, 502, 503, 529}

def _wait_hint(err, body):
    """Quanto esperar: respeita Retry-After (header) ou retryDelay '37s' (corpo Gemini)."""
    ra = err.headers.get("Retry-After") if err.headers else None
    if ra:
        try:
            return float(ra)
        except ValueError:
            pass
    m = re.search(r'"retryDelay"\s*:\s*"(\d+(?:\.\d+)?)s"', body)
    if m:
        return float(m.group(1))
    return None

def call_api(cfg, messages, temperature, max_retries=6, max_wait=180.0,
             max_tokens=16000, log=print):
    url = f"{cfg['base_url']}/chat/completions"
    payload = json.dumps({
        "model": cfg["model"],
        "messages": messages,
        "temperature": temperature,
        # Sem isso o Llama/Groq trunca a resposta no teto default (~8k) e faltam arquivos.
        "max_tokens": max_tokens,
    }).encode("utf-8")
    keys = cfg["api_keys"]
    nkeys = len(keys)

    def next_key(reason):
        """Avanca para a proxima chave (rodizio). Retorna False se nao houver mais."""
        if cfg["key_idx"] < nkeys - 1:
            cfg["key_idx"] += 1
            log(f"   {reason} -> trocando para chave {cfg['key_idx'] + 1}/{nkeys}")
            return True
        return False

    attempt = 0
    while True:
        headers = {
            "Authorization": f"Bearer {keys[cfg['key_idx']]}",
            "Content-Type": "application/json",
            # Alguns provedores (Groq/Cloudflare) bloqueiam o UA padrao do urllib (erro 1010).
            "User-Agent": "ai-experiment-runner/1.0",
        }
        req = urllib.request.Request(url, data=payload, method="POST", headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=300) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            return data["choices"][0]["message"]["content"]
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", "replace")
            if e.code not in RETRYABLE:
                raise urllib.error.HTTPError(e.url, e.code, body[:300], e.headers, None)
            wait = _wait_hint(e, body) or min(60.0, 5.0 * (2 ** attempt))
            # Espera gigante (ex.: 8380s) = cota DIARIA daquela chave esgotada.
            # Tenta a proxima chave do rodizio; se nao houver, aborta rapido.
            if wait > max_wait:
                if next_key(f"{e.code} cota da chave esgotada"):
                    attempt = 0
                    continue
                raise urllib.error.HTTPError(
                    e.url, e.code,
                    f"todas as {nkeys} chave(s) esgotadas (API pediu {wait:.0f}s)", e.headers, None)
            if attempt < max_retries:
                log(f"   {e.code} (limite/sobrecarga) -> aguardando {wait:.0f}s "
                    f"[tentativa {attempt + 1}/{max_retries}]")
                time.sleep(wait)
                attempt += 1
                continue
            # esgotou as tentativas nesta chave -> tenta a proxima
            if next_key(f"{e.code} apos {max_retries} tentativas"):
                attempt = 0
                continue
            raise urllib.error.HTTPError(e.url, e.code, body[:300], e.headers, None)
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt < max_retries:
                wait = min(60.0, 5.0 * (2 ** attempt))
                log(f"   rede ({e}) -> aguardando {wait:.0f}s [tentativa {attempt + 1}/{max_retries}]")
                time.sleep(wait)
                attempt += 1
                continue
            raise

# --- escrita / reset ---------------------------------------------------------
def run_dir(model, level, run):
    return SCEN / model / level / f"run-{run:02d}"

def reset_run(d):
    subprocess.run([str(HERE / "reset-scenario.sh"), str(d)], check=True,
                   stdout=subprocess.DEVNULL)

def has_output(d):
    """Heuristica: ja foi preenchido se algum test.ts tem mais que o import stub."""
    for f in FUNCS:
        t = d / "src" / f / "test.ts"
        if t.exists() and len(t.read_text(encoding="utf-8").strip().splitlines()) > 2:
            return True
    return False

def write_files(d, files):
    written = []
    for rel, body in files.items():
        p = d / rel
        if not str(p.resolve()).startswith(str(d.resolve())):
            continue  # path traversal guard
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(body, encoding="utf-8")
        written.append(rel)
    return written

# --- CLI ---------------------------------------------------------------------
def parse_runs(spec):
    out = set()
    for part in spec.split(","):
        part = part.strip()
        if "-" in part:
            a, b = part.split("-")
            out.update(range(int(a), int(b) + 1))
        elif part:
            out.add(int(part))
    return sorted(out)

def main():
    ap = argparse.ArgumentParser(description="Invoca as IAs por API e preenche os cenarios.")
    ap.add_argument("--model", action="append", default=[], help="ai-1|ai-2|ai-3|all (repetivel)")
    ap.add_argument("--level", default="", help="basic|intermediate|complete|all")
    ap.add_argument("--runs", default="1", help='"1-10" | "1,3,5" | "7"')
    ap.add_argument("--temperature", type=float, default=0.7)
    ap.add_argument("--delay", type=float, default=4.0,
                    help="segundos entre chamadas (evita limite por minuto do free tier)")
    ap.add_argument("--max-retries", type=int, default=6,
                    help="tentativas em 429/503 com backoff")
    ap.add_argument("--max-wait", type=float, default=180.0,
                    help="se a API pedir espera maior que isso (cota diaria), pula em vez de congelar")
    ap.add_argument("--max-tokens", type=int, default=16000,
                    help="teto de tokens da resposta (evita truncar os 22 arquivos)")
    ap.add_argument("--batch-size", type=int, default=0,
                    help="funcoes por chamada (0=todas de uma vez; use 6 p/ Groq, que tem TPM baixo)")
    ap.add_argument("--reset", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--overwrite", action="store_true")
    a = ap.parse_args()

    models = ["ai-1", "ai-2", "ai-3"] if "all" in a.model else (a.model or [])
    levels = LEVELS if a.level == "all" else ([a.level] if a.level else [])
    if not models or not levels:
        ap.error("informe --model e --level (use 'all' para todos)")
    runs = parse_runs(a.runs)

    total = ok = skip = fail = 0
    for model in models:
        cfg = MODELS[model]
        if not a.dry_run and not cfg["api_keys"]:
            print(f"[{model}] SEM API KEY (defina {cfg['key_env']} ou AI{model[-1]}_API_KEY) -- pulando")
            continue
        cfg["key_idx"] = 0  # comeca sempre pela 1a chave do rodizio
        if not a.dry_run and len(cfg["api_keys"]) > 1:
            print(f"[{model}] {len(cfg['api_keys'])} chaves no rodizio")
        for level in levels:
            for run in runs:
                total += 1
                d = run_dir(model, level, run)
                tag = f"{model}/{level}/run-{run:02d}"
                if not d.exists():
                    print(f"[{tag}] pasta inexistente (rode scripts/make-scenarios.sh) -- pulando")
                    skip += 1
                    continue
                if has_output(d) and not a.overwrite and not a.reset:
                    print(f"[{tag}] ja preenchido -- pulando (use --overwrite p/ refazer)")
                    skip += 1
                    continue
                batches = chunks(FUNCS, a.batch_size)
                if a.dry_run:
                    chars = sum(len(build_messages(level, b)[0]["content"]) for b in batches)
                    print(f"[{tag}] DRY-RUN modelo={cfg['model']} {len(batches)} chamada(s) "
                          f"~{chars // 4} tokens no total")
                    continue
                if a.reset:
                    reset_run(d)
                try:
                    files = {}
                    incomplete = False
                    for bi, b in enumerate(batches):
                        content = call_api(cfg, build_messages(level, b), a.temperature,
                                           max_retries=a.max_retries, max_wait=a.max_wait,
                                           max_tokens=a.max_tokens)
                        bf = parse_files(content)
                        if len(bf) < 2 * len(b):
                            (d / "raw_response.txt").write_text(content, encoding="utf-8")
                            print(f"[{tag}] PARSE INCOMPLETO (lote {bi + 1}/{len(batches)}): "
                                  f"{len(bf)}/{2 * len(b)} arquivos (raw_response.txt) -- inspecione")
                            incomplete = True
                            break
                        files.update(bf)
                        if a.delay > 0 and len(batches) > 1:
                            time.sleep(a.delay)
                    if incomplete:
                        fail += 1
                    else:
                        written = write_files(d, files)
                        extra = f" ({len(batches)} lotes)" if len(batches) > 1 else ""
                        print(f"[{tag}] OK {len(written)} arquivos{extra}")
                        ok += 1
                except urllib.error.HTTPError as e:
                    body = e.read().decode("utf-8", "replace")[:300]
                    print(f"[{tag}] HTTP {e.code}: {body}")
                    fail += 1
                except Exception as e:
                    print(f"[{tag}] ERRO: {e}")
                    fail += 1
                if a.delay > 0:
                    time.sleep(a.delay)

    print(f"\nResumo: {total} alvos | ok={ok} pulados={skip} falhas={fail}")
    if not a.dry_run and ok:
        print("Proximo: scoring/run_static_metrics.sh em cada run, depois aggregate_results.py")

if __name__ == "__main__":
    main()
