// Config StrykerJS para o mutation testing dos cenários (RQ1').
// Roda sobre os src/<func>/index.ts, usando os testes do participante (Jest).
// Exige uma suíte que passe — testes que falham são filtrados na análise (como no original).
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  packageManager: 'npm',
  testRunner: 'jest',
  jest: { configFile: 'jest.config.cjs' },
  reporters: ['json', 'clear-text'],
  // 'off' (nao 'perTest'): varios testes gerados mockam global.Date num beforeAll para fixar
  // o "agora". O modo perTest roda cada teste isolado e quebra esse mock global, fazendo testes
  // de data falharem só sob o Stryker (passam no Jest normal) e abortando o dry-run. 'off' roda
  // a suite inteira por mutante, preservando os mocks. Custo ok no projeto (11 funcs, ~88 testes).
  coverageAnalysis: 'off',
  mutate: ['src/**/index.ts', '!src/toDate/index.ts', '!src/types.ts', '!src/index.ts'],
  tsconfigFile: 'tsconfig.json',
  timeoutMS: 60000,
  concurrency: 2,
};
