#!/usr/bin/env python3
"""Analise estatistica final do results.csv (pos-Kruskal-Wallis).

Para cada metrica:
  - efeito do MODELO (RQ2'): Kruskal-Wallis + Mann-Whitney pareado (Holm) + Cliff's delta;
  - efeito do PROMPT (RQ1') agregando modelos: idem;
  - efeito do PROMPT DENTRO de cada modelo (decompoe a interacao prompt x modelo): KW por modelo.

So usa stdlib + scipy. Imprime um relatorio e salva scoring/figures/posthoc.csv (uma linha por
comparacao pareada). Mann-Whitney two-sided; Holm aplicado dentro de cada familia de 3 comparacoes
(por metrica e por fator). Cliff's delta: |d|<0.147 desprezivel, <0.33 pequeno, <0.474 medio, senao grande.

Uso:  python3 scoring/analyze.py [results.csv]
"""
import csv
import itertools
import statistics
import sys
import warnings
from collections import defaultdict
from pathlib import Path

from scipy import stats

# KW/Mann-Whitney avisam quando um grupo é constante (ex.: smell_ratio = 0 em todos os runs
# de um modelo -> todos empatados -> teste indefinido, sai 'nan'). Esperado; silenciamos.
warnings.filterwarnings("ignore", category=RuntimeWarning)

HERE = Path(__file__).resolve().parent
src = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "results.csv"
outdir = HERE / "figures"
outdir.mkdir(exist_ok=True)

MODELS = ["ai-1", "ai-2", "ai-3"]
LEVELS = ["basic", "intermediate", "complete"]
LABEL = {"ai-1": "Gemini", "ai-2": "gpt-oss", "ai-3": "Llama",
         "basic": "básico", "intermediate": "interm.", "complete": "completo"}
METRICS = [("num_tests", "Nº de testes"), ("line_coverage", "Cob. linha"),
           ("branch_coverage", "Cob. branch"), ("mutation_score", "Mutation"),
           ("golden_passed", "Golden"), ("own_fail_ratio", "Razão falha"),
           ("smell_ratio", "Razão smells")]

rows = list(csv.DictReader(open(src)))

def val(r, k):
    v = r.get(k, "")
    if v in ("", "None", "null"):
        return None
    try:
        return float(v)
    except ValueError:
        return None

def cliffs_delta(x, y):
    gt = sum(1 for a in x for b in y if a > b)
    lt = sum(1 for a in x for b in y if a < b)
    return (gt - lt) / (len(x) * len(y))

def magnitude(d):
    a = abs(d)
    return ("desprezível" if a < 0.147 else "pequeno" if a < 0.33
            else "médio" if a < 0.474 else "grande")

def holm(pairs):
    """pairs: lista de (rotulo, p). Retorna dict rotulo -> p_ajustado (Holm)."""
    m = len(pairs)
    order = sorted(range(m), key=lambda i: pairs[i][1])
    adj = {}
    prev = 0.0
    for rank, idx in enumerate(order):
        a = min(1.0, max((m - rank) * pairs[idx][1], prev))
        adj[pairs[idx][0]] = a
        prev = a
    return adj

def groups_for(metric, factor, fixed=None):
    """Retorna {grupo: [valores]} para o fator dado (opcionalmente fixando o outro fator)."""
    g = defaultdict(list)
    for r in rows:
        if fixed and r[fixed[0]] != fixed[1]:
            continue
        v = val(r, metric)
        if v is None:
            continue
        g[r["model" if factor == "model" else "prompt_level"]].append(v)
    return g

def kw(g):
    series = [v for v in g.values() if v]
    if len(series) < 2:
        return None
    try:
        return stats.kruskal(*series).pvalue
    except ValueError:
        return None

def mw(x, y):
    if len(x) < 2 or len(y) < 2:
        return None
    try:
        return stats.mannwhitneyu(x, y, alternative="two-sided").pvalue
    except ValueError:
        return None

def star(p):
    return "n/a" if p is None else f"{p:.4f}" + ("*" if p < 0.05 else " ")

out_rows = []
print(f"\n{'='*78}\nANÁLISE ESTATÍSTICA — {src.name}\n{'='*78}")
print("Mann-Whitney two-sided, p ajustado por Holm (família = 3 pares). "
      "* = p_Holm<0,05.\nCliff's delta (d): direção g1−g2; magnitude entre parênteses.\n")

for factor, order in (("model", MODELS), ("prompt_level", LEVELS)):
    titulo = "RQ2' — EFEITO DO MODELO (agrega níveis)" if factor == "model" \
        else "RQ1' — EFEITO DO PROMPT (agrega modelos)"
    print(f"\n{'─'*78}\n{titulo}\n{'─'*78}")
    for metric, mlabel in METRICS:
        g = groups_for(metric, factor)
        pkw = kw(g)
        pairs = list(itertools.combinations(order, 2))
        raw = []
        for a, b in pairs:
            p = mw(g.get(a, []), g.get(b, []))
            raw.append((f"{a}|{b}", 1.0 if p is None else p))
        adj = holm(raw)
        print(f"\n  {mlabel:12s}  Kruskal-Wallis p={star(pkw)}")
        for a, b in pairs:
            x, y = g.get(a, []), g.get(b, [])
            p = mw(x, y)
            d = cliffs_delta(x, y) if x and y else 0.0
            pa = adj[f"{a}|{b}"]
            print(f"      {LABEL[a]:>8} vs {LABEL[b]:<8}  p_Holm={star(pa)}  d={d:+.2f} ({magnitude(d)})")
            out_rows.append([metric, factor, a, b, len(x), len(y),
                             "" if p is None else f"{p:.4f}", f"{pa:.4f}", f"{d:.3f}", magnitude(d)])

# ---- decomposicao da interacao: efeito do prompt DENTRO de cada modelo ----
print(f"\n{'─'*78}\nINTERAÇÃO — efeito do PROMPT dentro de cada modelo (Kruskal-Wallis)\n{'─'*78}")
print(f"\n  {'métrica':14s}" + "".join(f"{LABEL[m]:>12}" for m in MODELS))
for metric, mlabel in METRICS:
    cells = []
    for m in MODELS:
        g = groups_for(metric, "prompt_level", fixed=("model", m))
        cells.append(kw(g))
    print(f"  {mlabel:14s}" + "".join(f"{star(c):>12}" for c in cells))
    for m, c in zip(MODELS, cells):
        out_rows.append([metric, f"prompt_within_{m}", "KW", "", "", "", "", "" if c is None else f"{c:.4f}", "", ""])

with open(outdir / "posthoc.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["metric", "factor", "group1", "group2", "n1", "n2", "p_raw", "p_holm", "cliff_delta", "magnitude"])
    w.writerows(out_rows)
print(f"\nTabela completa salva: {outdir / 'posthoc.csv'}\n")

# ---- Teste FORMAL de interacao: Scheirer-Ray-Hare (ANOVA de dois fatores em ranks) ----
# Extensao nao-parametrica do Kruskal-Wallis: testa efeito do modelo, do prompt e da INTERACAO
# num mesmo modelo. Assume celulas ~balanceadas (n=10; aproximado nas metricas com nulls). So scipy.
def srh(metric):
    keys, vals = [], []
    for r in rows:
        v = val(r, metric)
        if v is not None:
            keys.append((r["model"], r["prompt_level"]))
            vals.append(v)
    N = len(vals)
    if N < 9 or len(set(vals)) < 2:
        return None
    ranks = stats.rankdata(vals)
    grand = (N + 1) / 2
    MS = N * (N + 1) / 12.0
    if MS == 0:
        return None
    byA, byB, byC = defaultdict(list), defaultdict(list), defaultdict(list)
    for (m, l), rk in zip(keys, ranks):
        byA[m].append(rk); byB[l].append(rk); byC[(m, l)].append(rk)
    def ss(groups):
        return sum(len(g) * (statistics.mean(g) - grand) ** 2 for g in groups.values())
    ssA, ssB, ssC = ss(byA), ss(byB), ss(byC)
    ssAB = ssC - ssA - ssB
    a, b = len(byA), len(byB)
    return (stats.chi2.sf(ssA / MS, a - 1),
            stats.chi2.sf(ssB / MS, b - 1),
            stats.chi2.sf(max(ssAB, 0) / MS, (a - 1) * (b - 1)))

print(f"{'─'*78}\nScheirer-Ray-Hare — efeitos de MODELO, PROMPT e INTERAÇÃO (p; * = <0,05)\n{'─'*78}")
print(f"\n  {'métrica':14s}{'modelo':>12}{'prompt':>12}{'interação':>12}")
for metric, mlabel in METRICS:
    res = srh(metric)
    if res is None:
        print(f"  {mlabel:14s}{'n/a':>12}{'n/a':>12}{'n/a':>12}")
        continue
    pm, pp, pi = res
    print(f"  {mlabel:14s}{star(pm):>12}{star(pp):>12}{star(pi):>12}")
    out_rows.append([metric, "SRH", "model/prompt/interaction", "", "", "",
                     "", "", "", f"pmodel={pm:.4f};pprompt={pp:.4f};pinter={pi:.4f}"])

# regrava o CSV com as linhas do SRH
with open(outdir / "posthoc.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["metric", "factor", "group1", "group2", "n1", "n2", "p_raw", "p_holm", "cliff_delta", "magnitude"])
    w.writerows(out_rows)

# ---- Figura de interacao: mediana por nivel (x), uma linha por modelo ----
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

PLOT = [("num_tests", "Nº de testes"), ("branch_coverage", "Cob. branch (%)"),
        ("mutation_score", "Mutation score (%)"), ("golden_passed", "Golden (/60)"),
        ("own_fail_ratio", "Razão testes falhando"), ("line_coverage", "Cob. linha (%)")]
colors = {"ai-1": "#4C72B0", "ai-2": "#DD8452", "ai-3": "#55A868"}
fig, axes = plt.subplots(2, 3, figsize=(13, 7))
for ax, (metric, mlabel) in zip(axes.flatten(), PLOT):
    for mod in MODELS:
        ys = []
        for lv in LEVELS:
            vs = [val(r, metric) for r in rows
                  if r["model"] == mod and r["prompt_level"] == lv and val(r, metric) is not None]
            ys.append(statistics.median(vs) if vs else None)
        ax.plot(range(3), ys, "-o", color=colors[mod], label=LABEL[mod], linewidth=2, markersize=6)
    ax.set_title(mlabel, fontsize=10)
    ax.set_xticks(range(3)); ax.set_xticklabels(["básico", "interm.", "completo"], fontsize=9)
    ax.grid(alpha=0.25)
axes.flatten()[0].legend(fontsize=8, title="modelo")
fig.suptitle("Interação prompt × modelo — mediana por nível (linhas não paralelas = interação)", fontsize=12)
fig.tight_layout(rect=[0, 0, 1, 0.96])
fig.savefig(outdir / "interaction.png", dpi=130)
print(f"\nFigura de interação: {outdir / 'interaction.png'}")
print(f"Tabela (com SRH):    {outdir / 'posthoc.csv'}\n")
