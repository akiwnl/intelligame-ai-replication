#!/usr/bin/env python3
"""Consolida os metrics.json de todos os runs em um results.csv (uma linha por execução).

Varre ai-experiment/scenarios/ai-<m>/<nivel>/run-<NN>/metrics.json e produz colunas alinhadas
ao desenho fatorial 3x3 (modelo x nivel) com K runs por celula, prontas para Kruskal-Wallis /
Mann-Whitney (ver README, secao "Analise estatistica").

Uso:  aggregate_results.py [SCENARIOS_DIR] [-o results.csv]
"""
import csv
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
AIEXP = HERE.parent
scen_dir = Path(sys.argv[1]) if len(sys.argv) > 1 and not sys.argv[1].startswith("-") else AIEXP / "scenarios"
out = AIEXP / "scoring" / "results.csv"
if "-o" in sys.argv:
    out = Path(sys.argv[sys.argv.index("-o") + 1])

COLS = ["model", "prompt_level", "run", "num_tests", "line_coverage", "branch_coverage",
        "mutation_score", "mutation_excluded_tests", "golden_failed", "golden_passed",
        "own_failed", "own_passed", "own_fail_ratio", "smells", "smell_ratio"]

rows = []
for mj in sorted(scen_dir.glob("ai-*/*/run-*/metrics.json")):
    d = json.loads(mj.read_text())
    # .../scenarios/ai-1/basic/run-03/metrics.json
    run = mj.parent.name.replace("run-", "")
    level = mj.parent.parent.name
    model = mj.parent.parent.parent.name
    rows.append({"model": model, "prompt_level": level, "run": run,
                 **{k: d.get(k) for k in COLS if k not in ("model", "prompt_level", "run")}})

with open(out, "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=COLS)
    w.writeheader()
    w.writerows(rows)

print(f"{len(rows)} runs -> {out}")
if not rows:
    print("(nenhum metrics.json encontrado; rode run_static_metrics.sh nos runs primeiro)")
