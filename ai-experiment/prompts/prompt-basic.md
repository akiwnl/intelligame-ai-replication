# Prompt BÁSICO — "tarefa nua" (piso de comparação)

## Intenção (metadado — NÃO enviar à IA)

Primeiro nível do gradiente de detalhe. A IA recebe apenas o enunciado mínimo, sem material de apoio
nem orientação de qualidade. **Simula** um desenvolvedor que recebe só a atribuição, sem ambiente nem
recomendações. **Mede** o comportamento de teste "padrão" do modelo, sem qualquer empurrão — é o piso
de comparação. Não há equivalente direto no estudo original; serve de linha-base abaixo do grupo de
controle.

---

## Prompt (enviar à IA — junto do baseline-project)

Você recebeu um projeto TypeScript com 11 funções de manipulação de datas cujo corpo está incompleto.
As funções ficam em `src/<nome>/index.ts`:

`addDays`, `getDate`, `getDay`, `getDaysInMonth`, `getDaysInYear`, `isAfter`, `isBefore`, `isEqual`,
`isFuture`, `isPast`, `isWeekend`.

Sua tarefa:

1. Implemente o corpo das 11 funções em `src/<nome>/index.ts`.
2. Escreva testes Jest que verifiquem a correção de cada função, no arquivo `src/<nome>/test.ts`.

Restrições:

- Não use ferramentas, bibliotecas ou serviços externos além do que já está no projeto.
- Entregue apenas o conteúdo dos arquivos `index.ts` e `test.ts` de cada função.
