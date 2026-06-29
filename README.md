# Pacote de replicação — Gamificação de testes traduzida em níveis de prompt

Pacote de replicação do artigo **"Gamificação de testes traduzida em níveis de prompt: uma
replicação adaptada a modelos de IA geradores de código"** (UTFPR — modelo SBC). O fonte e o
PDF do artigo estão em [`paper/`](paper/) ([`paper/artigo.pdf`](paper/artigo.pdf)).

## O que é

Replicação adaptada do estudo *Straubinger et al., "Gamifying Testing in IntelliJ: A
Replicability Study"* (ISSTA 2025). No original, 174 participantes humanos escreviam testes
com ou sem o plugin de gamificação **IntelliGame**. Aqui os participantes humanos são
substituídos por **três modelos de IA geradores de código** (Gemini 2.5 Flash, GPT-OSS-120B,
Llama 3.3 70B) e a variável independente "gamificação (presente/ausente)" é reinterpretada
como o **nível de detalhe do prompt** (básico → intermediário → completo). Desenho fatorial
**3 prompts × 3 modelos × 10 runs = 90 execuções**; mede-se a qualidade estática dos artefatos
gerados.

Questões de pesquisa:

- **RQ1′** — o nível de detalhe do prompt influencia a qualidade da suíte/código?
- **RQ2′** — o efeito do prompt é consistente entre os modelos ou depende do modelo?
- **RQ3′** — prompts mais detalhados (ou certos modelos) geram testes mais minuciosos porém
  mais frágeis (quantidade vs. qualidade)?

## Estrutura

```
.
├── paper/                # artigo (artigo.tex, .pdf, referencias.bib, template SBC, boxplots.png)
├── ai-experiment/        # núcleo da replicação — ver ai-experiment/README.md (metodologia detalhada)
│   ├── prompts/          # prompt-{basic,intermediate,complete}.md
│   ├── baseline-project/ # projeto-base (stubs das 11 funções) dado às IAs
│   ├── scenarios/        # saída das 90 execuções (ai-{1,2,3}/<nível>/run-NN/)
│   ├── scoring/          # métricas estáticas, agregação, gráficos e estatística
│   └── scripts/          # runner das IAs + utilitários (env.sh.example aqui)
├── date-fns-original/    # biblioteca de origem das funções — usada como golden test suite no scoring
├── Dockerfile / docker-compose.yml / .dockerignore
├── .env.example          # modelo das chaves de API (NÃO commitar o .env preenchido)
└── requirements.txt      # deps Python do scoring
```

A documentação detalhada da metodologia, mapeamento RQ→métrica e análise estatística está em
[`ai-experiment/README.md`](ai-experiment/README.md).

## Pré-requisitos

- **Docker** (caminho recomendado), **ou**
- **Node 20** + **Python 3** (local).
- Chaves de API dos provedores (Gemini e OpenRouter; Groq opcional) — apenas para gerar novas
  execuções. A análise dos cenários já incluídos não precisa de chaves.

## Tutorial — Docker (recomendado)

```bash
cp .env.example .env          # preencha com suas chaves (não é necessário para --dry-run)
docker compose build
docker compose run --rm exp bash
```

Dentro do container (já em `/pkg/ai-experiment`), siga os passos 4–7 abaixo.

## Tutorial — local

```bash
# 1. deps do projeto-base (Jest/Stryker)
cd ai-experiment/baseline-project && npm install && cd ../..

# 2. deps Python do scoring
pip install -r requirements.txt

# 3. chaves (só para gerar novas execuções)
cp ai-experiment/scripts/env.sh.example ai-experiment/scripts/env.sh
$EDITOR ai-experiment/scripts/env.sh
source ai-experiment/scripts/env.sh
```

### Executar e pontuar (passos 4–7)

```bash
cd ai-experiment

# 4. gerar as execuções via API (90 = 3 modelos × 3 níveis × 10 runs)
#    use --dry-run para validar o prompt sem chamar a API (não gasta cota)
python3 scripts/run_models.py --model all --level all --runs 1-10
#    exemplos: --model ai-1 --level basic --runs 1-10   |   --model ai-3 ... (override Groq via env)

# 5. métricas estáticas de cada execução (acrescente --stryker para mutation score, lento)
scoring/run_static_metrics.sh scenarios/ai-1/basic/run-01

# 6. agregar em results.csv (uma linha por execução)
python3 scoring/aggregate_results.py

# 7. tabelas de mediana, figures/boxplots.png e p-valores Kruskal–Wallis (RQ1'/RQ2')
python3 scoring/visualize.py
#    pós-teste pareado Mann–Whitney + correção de Holm:
python3 scoring/analyze.py
```

Os 90 cenários já vêm em `ai-experiment/scenarios/`, então é possível pular o passo 4 e ir
direto à pontuação/análise.

## Segurança das chaves de API

- **Nunca** versione `ai-experiment/scripts/env.sh` nem `.env` — ambos estão no `.gitignore`.
- Compartilhe apenas os arquivos `*.example`.
- Se uma chave já tiver sido exposta em texto puro, **revogue/rotacione** no painel do
  provedor.
