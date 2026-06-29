#!/usr/bin/env python3
"""Visualiza e resume o results.csv: tabelas (mediana por celula), boxplots e Kruskal-Wallis.

Usa so stdlib + matplotlib + scipy (sem pandas/seaborn).

Uso:  python3 scoring/visualize.py [results.csv]
Saidas:
  scoring/figures/boxplots.png        boxplots de cada metrica por nivel de prompt x modelo
  scoring/figures/medians.csv         mediana de cada metrica por celula (modelo x nivel)
  (imprime no terminal as tabelas e os p-valores de Kruskal-Wallis)
"""
import csv
import statistics
import sys
from collections import defaultdict
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy import stats

HERE = Path(__file__).resolve().parent
src = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "results.csv"
outdir = HERE / "figures"
outdir.mkdir(exist_ok=True)

MODELS = ["ai-1", "ai-2", "ai-3"]
LEVELS = ["basic", "intermediate", "complete"]
MODEL_LABEL = {"ai-1": "Gemini 2.5 Flash", "ai-2": "gpt-oss-120b", "ai-3": "Llama 3.3 70B"}
# (metrica, rotulo, "maior melhor"?) - usadas nos graficos/tabelas
METRICS = [
    ("num_tests", "Nº de testes", None),
    ("line_coverage", "Cobertura linha (%)", True),
    ("branch_coverage", "Cobertura branch (%)", True),
    ("mutation_score", "Mutation score (%)", True),
    ("golden_passed", "Golden passa (/60)", True),
    ("own_fail_ratio", "Razão testes falhando", False),
    ("smell_ratio", "Razão test smells", False),
]

rows = list(csv.DictReader(open(src)))

def val(r, k):
    v = r.get(k, "")
    if v in ("", "None", "null"):
        return None
    try:
        return float(v)
    except ValueError:
        return None

# dados[(metric)][(model, level)] = lista de valores (ignora None)
data = {m: defaultdict(list) for m, _, _ in METRICS}
for r in rows:
    for m, _, _ in METRICS:
        v = val(r, m)
        if v is not None:
            data[m][(r["model"], r["prompt_level"])].append(v)

# ---- tabela de medianas por celula + CSV ----
def med(vs):
    return statistics.median(vs) if vs else None

print(f"\n=== Mediana por celula (modelo x nivel) — fonte: {src.name} ===\n")
with open(outdir / "medians.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["metric", "model", "basic", "intermediate", "complete"])
    for m, label, _ in METRICS:
        print(f"{label}")
        header = "        " + "".join(f"{lv:>14}" for lv in LEVELS)
        print(header)
        for mod in MODELS:
            cells = [med(data[m][(mod, lv)]) for lv in LEVELS]
            txt = "".join(f"{('%.1f' % c) if c is not None else '-':>14}" for c in cells)
            print(f"  {mod:5s} {txt}")
            w.writerow([m, mod] + [("%.2f" % c) if c is not None else "" for c in cells])
        print()

# ---- Kruskal-Wallis: efeito do nivel (RQ1') e do modelo (RQ2') ----
def kw(groups):
    groups = [g for g in groups if len(g) > 0]
    if len(groups) < 2 or sum(len(g) for g in groups) < 5:
        return None
    try:
        return stats.kruskal(*groups).pvalue
    except ValueError:
        return None

print("=== Kruskal-Wallis (p-valor; alfa=0,05) ===\n")
print(f"{'metrica':24s}{'~nivel (RQ1)':>16}{'~modelo (RQ2)':>16}")
for m, label, _ in METRICS:
    # efeito do nivel: agrupa por nivel (pooled models)
    by_level = [[v for (mo, lv), vs in data[m].items() if lv == L for v in vs] for L in LEVELS]
    # efeito do modelo: agrupa por modelo (pooled levels)
    by_model = [[v for (mo, lv), vs in data[m].items() if mo == M for v in vs] for M in MODELS]
    p_lv = kw(by_level)
    p_mo = kw(by_model)
    def fmt(p):
        if p is None:
            return "n/a"
        return f"{p:.4f}" + ("*" if p < 0.05 else "")
    print(f"{label:24s}{fmt(p_lv):>16}{fmt(p_mo):>16}")
print("\n* = significativo (p < 0,05). Pos-teste pareado (Mann-Whitney+Holm) fica para a analise final.\n")

# ---- boxplots: cada metrica, x=nivel, cores=modelo ----
colors = {"ai-1": "#4C72B0", "ai-2": "#DD8452", "ai-3": "#55A868"}
ncol = 4
nrow = -(-len(METRICS) // ncol)
fig, axes = plt.subplots(nrow, ncol, figsize=(4.2 * ncol, 3.6 * nrow))
axes = axes.flatten()
width = 0.24
for ax, (m, label, _) in zip(axes, METRICS):
    for mi, mod in enumerate(MODELS):
        positions = [li + (mi - 1) * width for li in range(len(LEVELS))]
        series = [data[m][(mod, lv)] for lv in LEVELS]
        bp = ax.boxplot(series, positions=positions, widths=width * 0.9,
                        patch_artist=True, showfliers=False, manage_ticks=False)
        for box in bp["boxes"]:
            box.set(facecolor=colors[mod], alpha=0.75, linewidth=0.6)
        for med_ln in bp["medians"]:
            med_ln.set(color="black", linewidth=1.1)
    ax.set_title(label, fontsize=10)
    ax.set_xticks(range(len(LEVELS)))
    ax.set_xticklabels(["básico", "interm.", "completo"], fontsize=8)
    ax.grid(axis="y", alpha=0.25)
for ax in axes[len(METRICS):]:
    ax.axis("off")
handles = [plt.Rectangle((0, 0), 1, 1, fc=colors[mo], alpha=0.75) for mo in MODELS]
fig.legend(handles, [MODEL_LABEL[mo] for mo in MODELS], loc="lower right",
           ncol=3, fontsize=9, bbox_to_anchor=(0.99, 0.01))
fig.suptitle("Métricas por nível de prompt × modelo (medianas; n≤10 por célula)", fontsize=12)
fig.tight_layout(rect=[0, 0.03, 1, 0.97])
fig.savefig(outdir / "boxplots.png", dpi=130)
print(f"Figura salva: {outdir / 'boxplots.png'}")
print(f"Medianas:     {outdir / 'medians.csv'}")
