# Limitações e passos manuais

O que **roda automaticamente** aqui no WSL e o que **fica a cargo do operador**, mais decisões de
engenharia tomadas para o pipeline funcionar.

## Roda automaticamente (validado)

Pipeline de scoring estático validado com uma implementação de referência (`npm install` já feito em
`baseline-project/`):

| Métrica | Resultado no smoke-test (impl de referência) |
|---|---|
| nº de testes | 55 |
| cobertura de linha | 98,48% |
| cobertura de branch | 71,42% |
| mutation score (Stryker) | 95,83% |
| golden-suite | 59/60 passando |
| testes próprios | 55/55 passando |

`scoring/run_static_metrics.sh <run>` → `metrics.json`; `scoring/aggregate_results.py` → `results.csv`.

## Passos manuais (a cargo do operador)

1. **Invocar as IAs e colar a saída.** O pacote NÃO chama as IAs. Para cada um dos 90 runs
   (3 modelos × 3 prompts × K=10), dê `prompts/prompt-<nível>.md` + o `baseline-project` ao modelo e
   cole o `index.ts`/`test.ts` gerados em `scenarios/<modelo>/<nível>/run-<NN>/src/<func>/`.
2. **Fixar a configuração dos modelos** (mesma temperatura/parâmetros entre os K runs de uma célula) e
   registrar quais modelos foram usados — isso vai no artigo e em `THREATS-TO-VALIDITY.md`.
3. **Rodar o scoring** em cada run e depois `aggregate_results.py`.
4. **Análise estatística** (Kruskal–Wallis + Mann–Whitney) sobre o `results.csv` — em R ou Python; não
   incluída no pacote.

## Decisões de engenharia (importantes para reprodutibilidade)

- **`moduleNameMapper` no `jest.config.cjs`.** Os `index.ts` importam `"../toDate/index.js"` (com
  extensão `.js`), mas o projeto simplificado só tem `.ts`. Adicionamos
  `'^(\\.{1,2}/.*)\\.js$': '$1'` para o Jest/ts-jest resolverem para o `.ts`. Sem isso nenhum teste
  roda. (No `date-fns-original` resolvia porque havia `.js` compilado ao lado.)
- **`TZ=UTC` fixo no scoring.** Testes de data/hora são sensíveis ao fuso (é o tema do RQ3'/§4.6). O
  scoring fixa `TZ=UTC` para ser determinístico entre máquinas e runs.
- **Falha constante de 1 teste na golden-suite.** O teste do helper `toDate` (`creates a date from a
  number`) foi escrito assumindo fuso UTC−4 e falha sob UTC. Como `toDate` é helper fixo (não é uma das
  11 funções pontuadas) e a falha é **constante em todos os cenários**, ela não enviesa as comparações
  — golden efetivo ≈ 59/60 no teto.
- **Stryker exige suíte 100% passando — exclusão automática de testes que falham.** O Stryker aborta
  se a suíte tem qualquer teste falhando. Espelhando o estudo original ("failing tests were excluded
  from the mutation analysis"), o `run_static_metrics.sh --stryker` exclui os testes que falham **antes**
  de mutar, de forma automática e iterativa (`scoring/skip_failing_by_line.py`):
  1. roda o Stryker; se a suíte passa, calcula o `mutation_score`;
  2. se falha, lê o log do Stryker, localiza cada teste que falhou (`src/<func>/test.ts:<linha>`) e
     **exclui por teste** (marca só aquele `it/test` com `.skip`); se a falha está no setup
     (`beforeAll`/`describe`) e não há `it` individual a pular, **exclui o arquivo de teste inteiro**
     daquela função (fallback);
  3. repete (até 5×) até a suíte ficar verde ou não haver mais o que excluir.
  O nº de testes excluídos fica em `mutation_excluded_tests` (transparência). **Por que detectar pela
  ótica do Stryker e não do Jest:** muitos testes gerados mockam `global.Date` num `beforeAll` para
  fixar o "agora"; o runner do Stryker quebra esse mock (ora falha de asserção, ora
  `Maximum call stack size exceeded` no próprio `beforeAll`), então esses testes **passam no Jest e só
  falham sob o Stryker** — uma detecção via Jest puro não os enxergaria. **Config:** usamos
  `coverageAnalysis: 'off'` (não `'perTest'`) no `stryker.config.mjs` pelo mesmo motivo (o modo
  `perTest` isola cada teste e agrava o problema do mock global).
  **Resultado nesta replicação:** 83/90 runs obtiveram `mutation_score`; 7 ficaram `null` (o Stryker
  falhou por motivo sem `test.ts:<linha>` parseável no stack trace — ex.: erro fora de um teste). Média
  de 1,9 teste excluído por run (máx. 23, quando dois arquivos de teste de data inteiros foram
  descartados). **Ameaça associada:** a exclusão por arquivo (fallback) descarta também testes que
  passariam, podendo **subestimar** o mutation score daquele run; `mutation_excluded_tests` permite
  filtrar/ponderar esses casos na análise.

## Fora de escopo (excluído por construção)

- **Níveis/conquistas do IntelliGame, comportamento interativo e survey** (RQ1/RQ3/RQ5/RQ7) — exigem
  humano + plugin + IDE. Ver `THREATS-TO-VALIDITY.md`. Reprodução opcional dos níveis via MCP em
  `SETUP-MCP-INTELLIJ.md`.

## Ameaça não mitigável aqui

- **Contaminação de treino:** `date-fns` é pública e popular; os modelos podem tê-la visto no treino.
  O experimento mede geração condicionada ao prompt, não capacidade "do zero". Declarar no artigo.
