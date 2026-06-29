# Prompt COMPLETO — "metas de qualidade explícitas" (≈ grupo treatment / IntelliGame)

## Intenção (metadado — NÃO enviar à IA)

Terceiro nível. Acrescenta ao intermediário os objetivos de qualidade **verbalizados**: alta cobertura
de linha/branch, testes minuciosos (BVA, casos de borda, robustez a data/hora), TDD e a janela de
150 min. **Simula** o **grupo treatment**, tornando explícito o que as conquistas do IntelliGame
incentivavam de forma implícita. **Mede** se a meta de qualidade declarada melhora o artefato e se
reaparece a tensão **quantidade × qualidade** observada no treatment humano (mais testes, porém mais
test smells e mais falhas ligadas a data/hora — §4.2 e §4.6 do paper original).

---

## Prompt (enviar à IA — junto do baseline-project)

Você recebeu um projeto TypeScript (versão simplificada da biblioteca `date-fns`, testada com Jest)
com 11 funções de manipulação de datas cujo corpo está incompleto. Sua tarefa é implementá-las e
escrever uma suíte de testes de **alta qualidade** para elas.

### As funções

Cada função fica em `src/<nome>/index.ts`. São elas:

`addDays`, `getDate`, `getDay`, `getDaysInMonth`, `getDaysInYear`, `isAfter`, `isBefore`, `isEqual`,
`isFuture`, `isPast`, `isWeekend`.

O `index.ts` de cada função já traz o **JSDoc** com o requisito e um **exemplo** — use-os como
especificação. A função auxiliar `toDate` (`src/toDate/index.ts`) já está implementada e pode ser
reutilizada.

### Como o projeto está organizado

- Cada função tem, ao lado do `index.ts`, um arquivo `test.ts` (a princípio só com o `import`) para os
  testes Jest daquela função.
- `main.ts` (raiz) serve para verificação manual.
- `documentation/` contém a documentação **offline** da MDN sobre as funções nativas de data do
  JavaScript.
- `README.md` descreve a estrutura e a execução.

### Como rodar

- `npm test` roda toda a suíte.
- `npm run test:coverage` roda com relatório de cobertura de linha e branch.

### Objetivos de qualidade (importante)

Você dispõe de uma janela equivalente a **150 minutos** de trabalho. Priorize uma suíte de testes
robusta e minuciosa, seguindo estas diretrizes:

1. **Cobertura alta** — busque a maior cobertura possível de **linha e de branch**; cubra todos os
   ramos condicionais de cada função.
2. **Testes minuciosos** — aplique **Boundary Value Analysis (BVA)**: teste datas logo dentro e logo
   fora dos limites válidos (viradas de mês/ano, fim de semana vs. dia útil, ano bissexto, etc.) e
   inclua **casos de borda** (datas inválidas, `NaN`, timestamps).
3. **Robustez a data e hora** — escreva testes que NÃO quebrem com o tempo nem com o ambiente: evite
   depender da data atual (`new Date()` sem argumentos), de **fusos horários** locais e de **formatos**
   de data dependentes de locale; não escreva testes cuja validade dependa de a data ser "futura" ou
   "passada" no momento da execução.
4. **TDD** — quando possível, escreva o teste antes ou junto da implementação, refinando o código a
   partir dos testes.

### Sua tarefa

1. Implemente o corpo das 11 funções em `src/<nome>/index.ts`, seguindo o JSDoc e o exemplo.
2. Escreva testes Jest minuciosos em `src/<nome>/test.ts`, atendendo aos objetivos de qualidade acima.

Restrições:

- Não use ferramentas, bibliotecas ou serviços externos além do que já está no projeto.
- Entregue o conteúdo dos arquivos `index.ts` e `test.ts` de cada função.
