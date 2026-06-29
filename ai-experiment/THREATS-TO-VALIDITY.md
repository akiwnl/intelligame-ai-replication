# Ameaças à Validade — adaptação a IAs

Espelha a §3.7 do artigo original, ajustada à substituição de participantes humanos por modelos de IA.

## Validade de construto — exclusão de RQs e da gamificação

O núcleo da adaptação: a pontuação é **qualidade estática do artefato**, sem plugin/IntelliJ/MCP.

Os "níveis de conquista" e as métricas de comportamento do IntelliGame (RQ1, RQ3, RQ7) foram
projetados para medir **comportamento interativo humano ao longo de 150 min** (quantas vezes a pessoa
rodou testes, com cobertura, usou debug). Para uma **IA que gera o artefato de uma vez**, esses números
refletiriam **quem operou o IDE** (replay), não o modelo — descasamento de construto. Usar níveis como
proxy de qualidade da IA seria, na melhor hipótese, redundante com as métricas estáticas (parte com
sinal) e artificial (parte sem sinal).

**Decisão:** medir qualidade do artefato (atribuível à IA, automatizável, fiel a RQ2/RQ4/RQ6) e
**excluir por construção** as RQs dependentes de comportamento/plugin/survey:

- **RQ1 (comportamento de teste)** — não há sessão interativa a observar.
- **RQ3 (níveis de conquista)** — não há plugin gerando `TestReport.csv`.
- **RQ5 (experiência do dev / survey)** — não há participante humano para responder.
- **RQ7 (conquistas mais importantes)** — idem RQ3.

IntelliJ + IntelliGame + MCP ficam como apêndice opcional (`SETUP-MCP-INTELLIJ.md`), fora do caminho
crítico. As RQs reformuladas (RQ1', RQ2', RQ3') cobrem RQ2/RQ4/RQ6 do original.

## Validade de conclusão — estocasticidade e tamanho de amostra

Modelos de IA são **estocásticos**: a mesma (modelo, prompt) produz artefatos diferentes a cada
execução. Tratamos isso como **variabilidade medida**, não como ameaça não-mitigada: cada célula
(modelo × prompt) é executada **K = 10 vezes**, e reportamos mediana + distribuição em vez de um único
valor. Os testes (Kruskal–Wallis + Mann–Whitney com correção de Holm, α = 0,05) operam sobre essas
distribuições. Ainda assim, K = 10 limita a potência estatística para efeitos pequenos.

## Validade interna — configuração e contaminação

- **Configuração dos modelos:** temperatura e demais parâmetros devem ser fixados e idênticos entre os
  runs de uma mesma célula, para que a variabilidade observada seja do modelo e não da configuração.
- **Contaminação de dados de treino:** `date-fns` é uma biblioteca pública e popular; os modelos podem
  ter visto implementações e testes dela no treino. Isso é uma ameaça real e deve ser declarada — o
  experimento mede geração condicionada ao prompt, não capacidade "do zero".
- **Vazamento da golden-suite:** a golden-suite é usada só para *scoring*, nunca entregue ao modelo.

## Validade externa — generalização

- **3 modelos** não generalizam para "IAs" em geral; são uma amostra de conveniência.
- A tarefa (`date-fns`, 11 funções simples) tem **poucos branches por natureza** (ver Discussão do
  paper), o que limita a variância de cobertura/mutation — assim como no estudo original.
- O desenho mede qualidade de artefato sob prompts de detalhe crescente; não captura uso interativo,
  manutenção ao longo do tempo, nem colaboração humano-IA.
