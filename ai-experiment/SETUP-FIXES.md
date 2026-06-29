# Correções de setup — problemas encontrados ao montar o pipeline

Três problemas reais surgiram ao validar o pipeline de scoring com uma implementação de referência.
Todos foram resolvidos e o pipeline roda fim-a-fim. Registrados aqui para a seção de reprodutibilidade
do artigo e para quem for re-executar o pacote.

---

## Problema 1 — Imports `.js` não resolviam (nenhum teste rodava)

- **Sintoma:** todas as 12 suítes falhavam ao iniciar com
  `Cannot find module '../toDate/index.js' from 'src/<func>/index.ts'`. Resultado: 0 testes executados,
  cobertura/golden/mutation impossíveis de calcular.
- **Causa raiz:** os `src/<func>/index.ts` importam o helper com extensão `.js`
  (`import { toDate } from "../toDate/index.js"`), mas o projeto simplificado contém apenas arquivos
  `.ts`. No `date-fns-original` isso resolvia porque havia o `.js` compilado ao lado do `.ts`; no
  baseline limpo (só stubs `.ts`) não há `.js`, então o Jest não acha o módulo.
- **Correção:** adicionado um `moduleNameMapper` ao `baseline-project/jest.config.cjs` que remove a
  extensão `.js` de imports relativos, deixando o `ts-jest` resolver o `.ts`:
  ```js
  moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1' },
  ```
  O mesmo mapeamento é aplicado no config isolado da golden-suite dentro de
  `scoring/run_static_metrics.sh`.
- **Impacto:** não altera o que a IA precisa escrever (ela continua implementando só os `.ts`); é
  pré-requisito para qualquer teste rodar. Mudança mínima e padrão para projetos TS que usam
  especificadores `.js`.

---

## Problema 2 — StrykerJS não estava instalado (mutation score sempre `null`)

- **Sintoma:** com o pipeline já rodando, `mutation_score` saía `null` mesmo passando `--stryker`.
- **Causa raiz:** o `date-experiment-2024` declara Jest e cobertura, mas **não** traz o StrykerJS nas
  dependências — embora o estudo original use Stryker para a métrica de mutation (RQ2). O binário
  `node_modules/.bin/stryker` simplesmente não existia.
- **Correção:** instalado no baseline (e fixado no `package.json`):
  ```
  npm install -D @stryker-mutator/core @stryker-mutator/jest-runner
  ```
  Config em `scoring/stryker.config.mjs` (testRunner `jest`, mutate em `src/**/index.ts` exceto helper
  `toDate`/`types`).
- **Impacto:** mutation score passou a ser calculado (95,83% no smoke-test de referência). **Atenção:**
  o Stryker exige suíte 100% passando — se o cenário tiver testes falhando, o mutation sai `null`
  (espelha o original, que "excluiu testes que falham da análise de mutation").

---

## Problema 3 — Testes de data/hora não-determinísticos (resultado dependia da máquina)

- **Sintoma:** a golden-suite acusava falhas que variavam conforme o fuso do sistema; ex.: o teste do
  helper `toDate` esperava `1970-01-01T04:00:00.000Z` e recebia `…T00:00:00.000Z`.
- **Causa raiz:** testes de data/hora são sensíveis ao `TZ` do sistema — exatamente o tema do RQ3'/§4.6
  do paper (robustez a fuso/formato). Sem fixar o fuso, o scoring não é reproduzível entre máquinas
  nem entre runs.
- **Correção:** `scoring/run_static_metrics.sh` fixa `export TZ="${TZ:-UTC}"` no topo, tornando o
  scoring determinístico (alinhado à convenção `env TZ=utc` que o próprio projeto já usa em
  `locale-snapshots`).
- **Impacto:** scoring determinístico. Resta **1 falha constante** na golden-suite (o teste do `toDate`
  acima, escrito assumindo UTC−4, falha sob UTC). Como `toDate` é helper fixo (não é uma das 11 funções
  pontuadas) e a falha é igual em todos os cenários, ela **não enviesa as comparações** — o teto
  efetivo da golden é ≈ 59/60.

---

## Verificação pós-correção (smoke-test com impl de referência)

| Métrica | Valor |
|---|---|
| nº de testes | 55 |
| cobertura de linha | 98,48% |
| cobertura de branch | 71,42% |
| mutation score | 95,83% |
| golden-suite | 59/60 |
| testes próprios | 55/55 |
