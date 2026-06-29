#!/usr/bin/env bash
# Reseta um run ao estado inicial (stubs do baseline), descartando a saída da IA e artefatos de scoring.
#
# Uso:  reset-scenario.sh <RUN_DIR>
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AIEXP="$(cd "$HERE/.." && pwd)"
BASELINE="$AIEXP/baseline-project"

RUN_DIR="${1:?uso: reset-scenario.sh <RUN_DIR>}"
RUN_DIR="$(cd "$RUN_DIR" && pwd)"

rsync -a --delete \
  --exclude='node_modules' --exclude='coverage' --exclude='.stryker-tmp' \
  --exclude='reports' --exclude='metrics.json' \
  --exclude='documentation' --exclude='images' --exclude='scripts' \
  "$BASELINE/" "$RUN_DIR/"
rm -f "$RUN_DIR/metrics.json"
rm -rf "$RUN_DIR/coverage" "$RUN_DIR/reports" "$RUN_DIR/.stryker-tmp"
echo "Reset: $RUN_DIR"
