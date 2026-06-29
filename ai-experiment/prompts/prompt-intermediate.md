# Prompt INTERMEDIÁRIO — "ambiente do projeto" (≈ grupo de controle)

## Intenção (metadado — NÃO enviar à IA)

Segundo nível. Acrescenta ao básico os recursos que o próprio projeto oferece (README, JSDoc, arquivos
`test.ts`, comandos `test`/`test:coverage`, `main.ts`, documentação MDN offline). **Simula** o ambiente
real do **grupo de controle**: o desenvolvedor dispõe de todo o material e ferramental do projeto, mas
de nenhum incentivo explícito à qualidade dos testes. **Isola** o efeito de "conhecer o ambiente / ter
as ferramentas à mão", sem nenhuma meta de qualidade declarada.

---

## Prompt (enviar à IA — junto do baseline-project)

Você recebeu um projeto TypeScript (versão simplificada da biblioteca `date-fns`, testada com Jest)
com 11 funções de manipulação de datas cujo corpo está incompleto. Sua tarefa é implementá-las e
testá-las.

### As funções

Cada função fica em `src/<nome>/index.ts`. São elas:

`addDays`, `getDate`, `getDay`, `getDaysInMonth`, `getDaysInYear`, `isAfter`, `isBefore`, `isEqual`,
`isFuture`, `isPast`, `isWeekend`.

O arquivo `index.ts` de cada função já contém o **JSDoc** com a descrição do requisito e um **exemplo**
de uso — use-os como especificação. A função auxiliar `toDate` (em `src/toDate/index.ts`) já está
implementada e pode ser reutilizada.

### Como o projeto está organizado

- Cada função tem, ao lado do `index.ts`, um arquivo `test.ts` (a princípio só com o `import`) onde você
  deve escrever os testes Jest daquela função.
- O arquivo `main.ts` na raiz serve para chamar funções e verificar manualmente o comportamento.
- A pasta `documentation/` contém a versão **offline** da documentação da MDN sobre as funções nativas
  de data do JavaScript — pode consultá-la para implementar o código.
- O `README.md` do projeto descreve a estrutura e como executar.

### Como rodar

- `npm test` (ou o script `test`) roda toda a suíte de testes Jest.
- `npm run test:coverage` (ou o script `test:coverage`) roda a suíte com relatório de cobertura.

### Sua tarefa

1. Implemente o corpo das 11 funções em `src/<nome>/index.ts`, seguindo o JSDoc e o exemplo de cada uma.
2. Escreva testes Jest em `src/<nome>/test.ts` que verifiquem a correção das funções.

Restrições:

- Não use ferramentas, bibliotecas ou serviços externos além do que já está no projeto.
- Entregue o conteúdo dos arquivos `index.ts` e `test.ts` de cada função.
