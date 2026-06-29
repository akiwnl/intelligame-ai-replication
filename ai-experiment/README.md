# Replicação adaptada a IAs — "Gamifying Testing in IntelliJ"

Adaptação do estudo *"Gamifying Testing in IntelliJ: A Replicability Study"* (Straubinger, Fulcini et
al., ISSTA 2025) substituindo os participantes humanos por **modelos de IA geradores de código**.

## Visão geral

No estudo original a variável independente é a **gamificação** (grupo *treatment* com IntelliGame vs.
grupo de **controle** sem). As conquistas do plugin incentivavam **implicitamente** bons comportamentos
de teste (escrever mais testes, medir cobertura, aplicar BVA/edge cases, corrigir falhas).

Sem IDE nem plugin, a IA gera o artefato (código + testes) de uma só vez. Reinterpretamos então a
variável independente como o **nível de detalhe do prompt**, e o prompt *completo* passa a **verbalizar
explicitamente** os mesmos comportamentos que a gamificação induzia. A gamificação não foi abandonada —
foi traduzida de "nudge motivacional" para "instrução explícita".

### Desenho fatorial 3×3

- **Fator 1 — nível de prompt:** básico → intermediário → completo (`prompts/`).
- **Fator 2 — modelo de IA:** 3 modelos distintos (papel da "população de participantes").
- **9 células** (3 prompts × 3 modelos), **K = 10 execuções por célula** → **90 execuções**.

| Nível do prompt | O que acrescenta | Análogo no estudo original |
|---|---|---|
| Básico | só o enunciado das 11 funções + escrever testes | (piso, sem equivalente direto) |
| Intermediário | README, JSDoc, `test.ts`, comandos, `main.ts`, docs MDN | grupo de controle (ambiente, sem incentivo) |
| Completo | cobertura alta, BVA/edge cases, robustez data/hora, TDD, 150 min | grupo treatment (IntelliGame) |

## Research Questions

Das 7 RQs originais, só RQ2 (qualidade da suíte), RQ4 (funcionalidade) e RQ6 (qualidade/robustez) são
mensuráveis por métricas estáticas. RQ1/RQ3/RQ5/RQ7 dependem de comportamento interativo humano,
níveis de conquista ou questionário e são **excluídas por construção** (ver `THREATS-TO-VALIDITY.md`).

- **RQ1' — Efeito do detalhe do prompt.** O nível de detalhe (básico → intermediário → completo)
  influencia a qualidade da suíte e do código gerados? *(análogo do efeito da gamificação)*
- **RQ2' — Variação entre modelos.** O efeito do prompt é consistente entre as IAs ou depende do
  modelo? *(análogo da população de participantes)*
- **RQ3' — Quantidade vs. qualidade/robustez.** Prompts mais detalhados (ou certos modelos) geram
  testes mais minuciosos porém mais frágeis? *(reaproveita o achado central do paper: mais testes,
  porém mais test smells e falhas de data/hora)*

## Mapeamento RQ → métrica → como calcular

| Métrica | RQ | Como calcular (sem plugin) |
|---|---|---|
| Nº de testes | RQ1'/RQ3' | regex `test(`/`it(` nos `src/**/test.ts` (réplica de `Process.kt::countAllTests`) |
| Cobertura linha/branch | RQ1' | `jest --coverage --coverageReporters=json-summary` |
| Mutation score | RQ1' | StrykerJS (`stryker run`) — exige suíte passando |
| Golden-suite passa/falha | RQ1'/RQ3' | copiar `date-fns-original/src/<f>/test.ts` como `test2.ts`, rodar Jest, ler `X failed, Y passed` (60 testes) |
| Razão de test smells | RQ3' | Smelly Test; fallback: contar `console.`/condicionais nos testes |
| Razão de testes próprios que falham | RQ3' | rodar a suíte do cenário e contar falhas |

## Análise estatística

- **3 níveis de prompt** → Kruskal–Wallis + pós-teste pareado Mann–Whitney (correção de Holm),
  espelhando o Wilcoxon–Mann–Whitney do original (α = 0,05).
- **3 modelos** → mesma abordagem entre modelos; testar interação prompt × modelo.
- Reportar **mediana + distribuição** por célula (não média de N=1) e K por célula.
- RQ3': correlação nº de testes × (smells, falhas), ecoando a Pearson da Fig. 4b do paper.

## Estrutura

```
ai-experiment/
├── README.md
├── THREATS-TO-VALIDITY.md
├── SETUP-FIXES.md                 # 3 problemas de setup resolvidos (reprodutibilidade)
├── LIMITATIONS-AND-MANUAL-STEPS.md
├── SETUP-MCP-INTELLIJ.md          # apêndice opcional (fora do escopo)
├── prompts/                       # prompt-{basic,intermediate,complete}.md
├── baseline-project/              # cópia pristina dos stubs (sem .git/.idea/node_modules)
├── scenarios/ai-{1,2,3}/{basic,intermediate,complete}/run-NN/   # saída de cada execução
├── scoring/                       # run_static_metrics.sh, aggregate_results.py, stryker.config.mjs, results-template.csv
└── scripts/                       # make-scenarios.sh, reset-scenario.sh
```

## Fluxo de uso

1. Para cada célula (modelo × prompt) e cada run (1..K): dar `prompts/prompt-<nível>.md` + o
   `baseline-project` à IA; colar a saída em `scenarios/ai-<m>/<nível>/run-<NN>/`.
   *Automação:* `scripts/run_models.py --model all --level all --runs 1-10` faz isso via API
   (endpoints compatíveis com OpenAI; chaves por env — ver cabeçalho do script).
2. `scoring/run_static_metrics.sh <pasta-do-run>` para cada execução.
3. `scoring/aggregate_results.py` → `results.csv` (uma linha por execução).
4. `scoring/visualize.py` → tabelas de mediana por célula, `figures/boxplots.png` (métrica × nível ×
   modelo) e p-valores de Kruskal–Wallis (RQ1'/RQ2').
5. Rodar a análise estatística final (pós-teste Mann–Whitney + Holm) sobre o `results.csv`.
