#!/usr/bin/env bash
# Gera as pastas de cenário a partir do baseline-project.
# Estrutura: scenarios/ai-<m>/<nivel>/run-<NN>/  (cópia limpa do baseline, pronta p/ a saída da IA)
#
# Uso:  make-scenarios.sh [K]
#   K = nº de runs por célula (default 10). 3 modelos x 3 níveis x K runs.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AIEXP="$(cd "$HERE/.." && pwd)"
BASELINE="$AIEXP/baseline-project"
SCEN="$AIEXP/scenarios"
K="${1:-10}"

MODELS=(ai-1 ai-2 ai-3)
LEVELS=(basic intermediate complete)

for m in "${MODELS[@]}"; do
  for lvl in "${LEVELS[@]}"; do
    for ((i=1; i<=K; i++)); do
      run=$(printf "run-%02d" "$i")
      dest="$SCEN/$m/$lvl/$run"
      mkdir -p "$dest"
      rsync -a --delete \
        --exclude='node_modules' --exclude='coverage' --exclude='.stryker-tmp' \
        --exclude='reports' --exclude='metrics.json' \
        --exclude='documentation' --exclude='images' --exclude='scripts' \
        "$BASELINE/" "$dest/"
    done
  done
done

echo "Gerados ${#MODELS[@]}x${#LEVELS[@]}x$K = $(( ${#MODELS[@]} * ${#LEVELS[@]} * K )) runs em $SCEN"
echo "Agora cole a saída de cada IA em scenarios/<modelo>/<nivel>/<run>/src/<func>/{index.ts,test.ts}"
