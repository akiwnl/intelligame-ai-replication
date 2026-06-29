#!/usr/bin/env bash
# Calcula as métricas estáticas de UM run (uma execução de uma célula modelo×prompt).
#
# Uso:  run_static_metrics.sh <RUN_DIR> [--stryker]
#   <RUN_DIR>  pasta de um run = projeto completo (cópia do baseline) com a saída da IA
#              aplicada em src/<func>/{index.ts,test.ts}.
#   --stryker  (opcional) também roda o mutation testing (lento).
#
# Saída: escreve <RUN_DIR>/metrics.json e imprime um resumo.
# Não muta <RUN_DIR>: todo o cálculo roda numa cópia temporária.
set -euo pipefail

# Fuso fixo para reprodutibilidade: testes de data/hora são sensíveis ao TZ do sistema
# (é justamente o tema do RQ3'/§4.6). Mantém o scoring determinístico entre máquinas e runs.
export TZ="${TZ:-UTC}"

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AIEXP="$(cd "$HERE/.." && pwd)"
BASELINE="$AIEXP/baseline-project"
GOLDEN="$(cd "$AIEXP/../date-fns-original" && pwd)"

RUN_DIR="${1:?uso: run_static_metrics.sh <RUN_DIR> [--stryker]}"
RUN_DIR="$(cd "$RUN_DIR" && pwd)"
RUN_STRYKER=0
[[ "${2:-}" == "--stryker" ]] && RUN_STRYKER=1

if [[ ! -d "$BASELINE/node_modules" ]]; then
  echo "ERRO: baseline-project/node_modules ausente. Rode 'npm install' no baseline primeiro." >&2
  exit 1
fi

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

# cópia de trabalho: projeto do run, sem node_modules/coverage; node_modules vem por symlink do baseline
rsync -a --exclude='node_modules' --exclude='coverage' --exclude='.stryker-tmp' \
  --exclude='reports' --exclude='metrics.json' "$RUN_DIR/" "$WORK/"
ln -s "$BASELINE/node_modules" "$WORK/node_modules"
cd "$WORK"

JEST="./node_modules/.bin/jest"

# ---- Métrica 1: nº de testes do participante (réplica de Process.kt::countAllTests) ----
NUM_TESTS=0
if compgen -G "src/*/test.ts" > /dev/null; then
  NUM_TESTS=$({ grep -hoE '[[:space:]](test|it)\(' src/*/test.ts 2>/dev/null || true; } | wc -l | tr -d ' ')
fi

# ---- Métrica 2: cobertura (linha/branch) + Métrica 3: testes próprios passa/falha ----
LINE_PCT="null"; BRANCH_PCT="null"; OWN_FAILED=0; OWN_PASSED=0
COV_OUT="$("$JEST" --coverage --coverageReporters=json-summary --no-colors 2>&1 || true)"
if [[ -f coverage/coverage-summary.json ]]; then
  LINE_PCT=$(python3 -c "import json;print(json.load(open('coverage/coverage-summary.json'))['total']['lines']['pct'])" 2>/dev/null || echo null)
  BRANCH_PCT=$(python3 -c "import json;print(json.load(open('coverage/coverage-summary.json'))['total']['branches']['pct'])" 2>/dev/null || echo null)
fi
if [[ "$COV_OUT" =~ Tests:[[:space:]]+([0-9]+)[[:space:]]failed,[[:space:]]+([0-9]+)[[:space:]]passed ]]; then
  OWN_FAILED="${BASH_REMATCH[1]}"; OWN_PASSED="${BASH_REMATCH[2]}"
elif [[ "$COV_OUT" =~ Tests:[[:space:]]+([0-9]+)[[:space:]]passed ]]; then
  OWN_PASSED="${BASH_REMATCH[1]}"
fi

# ---- Métrica 4: golden test suite (réplica de Process.kt::executeGoldenTestSuite) ----
# copia os test.ts da golden como test2.ts ao lado do index.ts da IA; garante toDate correto;
# roda Jest isolando apenas os test2.ts.
for f in "$GOLDEN"/src/*/test.ts; do
  d="$(basename "$(dirname "$f")")"
  [[ -d "src/$d" ]] && cp "$f" "src/$d/test2.ts"
done
cp "$GOLDEN/src/toDate/index.ts" "src/toDate/index.ts"
cat > jest.golden.cjs <<'EOF'
module.exports = {
  verbose: false,
  testMatch: ['<rootDir>/src/**/test2.ts'],
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1' },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  }
}
EOF
GOLD_FAILED=60; GOLD_PASSED=0
GOLD_OUT="$("$JEST" --config jest.golden.cjs --no-colors 2>&1 || true)"
if [[ "$GOLD_OUT" =~ Tests:[[:space:]]+([0-9]+)[[:space:]]failed,[[:space:]]+([0-9]+)[[:space:]]passed ]]; then
  GOLD_FAILED="${BASH_REMATCH[1]}"; GOLD_PASSED="${BASH_REMATCH[2]}"
elif [[ "$GOLD_OUT" =~ Tests:[[:space:]]+([0-9]+)[[:space:]]passed ]]; then
  GOLD_FAILED=0; GOLD_PASSED="${BASH_REMATCH[1]}"
fi
rm -f src/*/test2.ts jest.golden.cjs

# ---- Métrica 5 (fallback): test smells = console.* + condicionais nos testes do participante ----
SMELLS=0
if compgen -G "src/*/test.ts" > /dev/null; then
  C=$({ grep -hoE 'console\.' src/*/test.ts 2>/dev/null || true; } | wc -l | tr -d ' ')
  COND=$({ grep -hoE '[[:space:]](if|for|while|switch)[[:space:]]*\(' src/*/test.ts 2>/dev/null || true; } | wc -l | tr -d ' ')
  SMELLS=$(( ${C:-0} + ${COND:-0} ))
fi
SMELL_RATIO="null"
[[ "$NUM_TESTS" -gt 0 ]] && SMELL_RATIO=$(python3 -c "print(round($SMELLS/$NUM_TESTS,4))")

# ---- Métrica 3b: razão de testes próprios que falham ----
OWN_TOTAL=$(( OWN_FAILED + OWN_PASSED ))
OWN_FAIL_RATIO="null"
[[ "$OWN_TOTAL" -gt 0 ]] && OWN_FAIL_RATIO=$(python3 -c "print(round($OWN_FAILED/$OWN_TOTAL,4))")

# ---- Métrica (opcional): mutation score via Stryker ----
# O Stryker exige a suíte 100% passando. Espelhando o estudo original ("failing tests were
# excluded from the mutation analysis"), excluímos os testes que falham ANTES de mutar — por
# teste (marcando só o `it/test` que falha como `.skip`), não por arquivo, para não descartar
# testes que passam nem enviesar o score. As falhas são detectadas pela ÓTICA DO STRYKER (não
# do Jest puro): muitos testes mockam global.Date num beforeAll e o runner do Stryker quebra
# esse mock, fazendo testes de data falharem só sob o Stryker. Por isso rodamos iterativo: roda
# → pula os testes que o log do Stryker apontou (arquivo:linha) → re-roda, até ficar verde.
# Nº de testes excluídos vai em `mutation_excluded_tests` (transparência).
MUT_SCORE="null"
MUT_EXCLUDED=0
if [[ "$RUN_STRYKER" == "1" ]]; then
  cp "$HERE/stryker.config.mjs" stryker.config.mjs
  for _iter in 1 2 3 4 5; do
    rm -rf reports .stryker-tmp
    ./node_modules/.bin/stryker run --reporters json > stryker.log 2>&1 || true
    if [[ -f reports/mutation/mutation.json ]]; then
      break  # suíte verde: Stryker concluiu o mutation
    fi
    NEW=$(python3 "$HERE/skip_failing_by_line.py" stryker.log "$WORK" 2>/dev/null || echo 0)
    MUT_EXCLUDED=$(( MUT_EXCLUDED + ${NEW:-0} ))
    [[ "${NEW:-0}" -eq 0 ]] && break  # sem novas exclusões: não dá pra ficar verde, desiste
  done
  if [[ -f reports/mutation/mutation.json ]]; then
    MUT_SCORE=$(python3 -c "
import json;d=json.load(open('reports/mutation/mutation.json'))
tot=killed=0
for f in d.get('files',{}).values():
    for m in f.get('mutants',[]):
        tot+=1
        if m['status']=='Killed':killed+=1
print(round(100*killed/tot,2) if tot else 'null')" 2>/dev/null || echo null)
  fi
fi

# ---- emite metrics.json ----
python3 - "$RUN_DIR" "$NUM_TESTS" "$LINE_PCT" "$BRANCH_PCT" "$MUT_SCORE" \
  "$GOLD_FAILED" "$GOLD_PASSED" "$OWN_FAILED" "$OWN_PASSED" "$OWN_FAIL_RATIO" \
  "$SMELLS" "$SMELL_RATIO" "$MUT_EXCLUDED" <<'PY'
import json,sys
(run_dir,num,line,branch,mut,gf,gp,of,op,ofr,sm,smr,mex)=sys.argv[1:14]
def n(x):
    if x in ("null","Unknown",""):return None
    try:return int(x)
    except ValueError:
        try:return float(x)
        except ValueError:return None
d=dict(run_dir=run_dir,num_tests=n(num),line_coverage=n(line),branch_coverage=n(branch),
       mutation_score=n(mut),mutation_excluded_tests=n(mex),
       golden_failed=n(gf),golden_passed=n(gp),
       own_failed=n(of),own_passed=n(op),own_fail_ratio=n(ofr),
       smells=n(sm),smell_ratio=n(smr))
open(run_dir+"/metrics.json","w").write(json.dumps(d,indent=2))
print(json.dumps(d,indent=2))
PY
