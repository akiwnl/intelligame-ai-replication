# Complemento do artigo — o que será adicionado e por quê

Documento de revisão antes da escrita. O `artigo_replicacao_latex (1)/artigo.tex` está hoje na
versão de **planejamento** (a execução aparece como "trabalho futuro"). As 90 execuções
(3 modelos × 3 prompts × 10 runs) **já foram rodadas e pontuadas**
(`ai-experiment/scoring/results.csv`, `figures/medians.csv`, `figures/posthoc.csv`,
`figures/boxplots.png`). O complemento transforma o artigo no **estudo completo**: acrescenta
Metodologia detalhada, Resultados, Ameaças à validade e Conclusão, mantendo o modelo SBC, em
português, com `resumo` (sem abstract) e 4–6 páginas.

Decisões já tomadas: **nomear os modelos reais** (Gemini 2.5 Flash, GPT-OSS-120B, Llama 3.3 70B) e
**incluir a figura de boxplots**.

## O que muda em cada parte (e o motivo)

- **Resumo** — de "apresenta o planejamento" para "executou as 90 rodadas e reporta os resultados".
  *Motivo:* o resumo precisa anunciar o que foi medido e o achado central (o **modelo** é o fator
  dominante; o **detalhe do prompt** aumenta o nº de testes com efeito grande; a tensão
  quantidade×qualidade observada em humanos quase não reaparece nas IAs).

- **Introdução** — atualizar as contribuições para incluir execução, análise estatística e respostas
  às RQ1′–RQ3′. Mantém o enquadramento "gamificação traduzida em detalhe de prompt".

- **Estudo replicado / Objetivos / RQs** — mantidos (já corretos). São o elo com o estudo original
  de Straubinger et al. (ISSTA 2025).

- **Metodologia (expandida)** — *Motivo:* dar reprodutibilidade e fechar a tradução do estímulo.
  - **Os três prompts**: básico (tarefa nua — piso); intermediário (README, JSDoc, `test.ts`,
    comandos, `main.ts`, docs MDN offline ≈ grupo de controle); completo (metas **verbalizadas**:
    alta cobertura linha/branch, BVA e casos de borda, robustez a fuso/locale, TDD, janela de
    150 min ≈ grupo treatment/IntelliGame).
  - **Os três modelos**: ai-1 = Gemini 2.5 Flash; ai-2 = GPT-OSS-120B; ai-3 = Llama 3.3 70B Instruct.
    Parâmetros fixos por célula para isolar a variabilidade do modelo.
  - **Projeto-base e scoring**: 11 funções derivadas de date-fns (Jest); golden-suite só para
    pontuação, nunca entregue ao modelo; métricas = nº de testes, cobertura linha/branch,
    mutation score (StrykerJS), golden passa/falha, razão de testes próprios que falham, razão de
    test smells. `TZ=UTC` para determinismo.
  - **Estatística**: K=10, mediana+distribuição; Kruskal–Wallis + Mann–Whitney pareado com correção
    de Holm (α=0,05); Cliff's δ (tamanho de efeito); SRH para interação modelo×prompt.

## Explicação da análise (o que os números dizem)

- **Quantidade de testes** cresce do prompt básico ao completo, sobretudo no Gemini
  (82,5 → 133,0) e no GPT-OSS (22,0 → 49,5); o Llama quase não responde (11,0 → 23,5).
- **Cobertura**: Gemini já no teto (~98,8% linha, ~91% branch) e estável; GPT-OSS melhora bastante a
  cobertura de branch com o prompt (55,8% → 76,9%); Llama é o mais baixo (linha ~93–94%, branch
  32,3% → 50,0%).
- **Mutation score**: GPT-OSS é o melhor e chega a 100% no prompt completo; Gemini estável (~76–77%);
  Llama variável (63,9% → 87,3% → 85,0%).
- **Funcionalidade (golden-suite)**: Gemini ~58/58; GPT-OSS 57–58; Llama 54,5–57 (mais falhas).
- **Significância**: o **modelo** é o fator dominante (Cliff's δ = 1,000 em nº de testes entre
  Gemini e os demais; SRH `pmodel ≈ 0,0000` em quase todas as métricas). O **prompt** é significativo
  para o nº de testes (básico vs. completo: `p_holm = 0,0046`, δ = −0,476, efeito grande) e para a
  razão de falhas próprias (`p_holm = 0,0030`, δ = −0,481). **Não há interação** modelo×prompt
  relevante (pinter > 0,47), salvo o mutation score no limite (0,0494).
- **Respostas às RQs**:
  - **RQ1′** — sim, detalhar o prompt melhora o artefato, principalmente em quantidade de testes (e,
    em GPT-OSS/Llama, em cobertura/mutation); no Gemini a cobertura já estava saturada.
  - **RQ2′** — o efeito do prompt **depende do modelo** (forte no Gemini, fraco no Llama), mas a
    direção é consistente; o modelo é a maior fonte de variação.
  - **RQ3′** — a tensão quantidade×qualidade humana **quase não reaparece**: test smells ~0 em todos
    os modelos; a razão de falhas próprias sobe um pouco com o prompt completo, mais no Llama (0,11),
    indicando leve fragilidade — não o trade-off acentuado do estudo humano.

## Ameaças à validade (atenção especial)

- **Construto** — o nível de detalhe do prompt é um *proxy* da gamificação, não um equivalente
  perfeito (instrução explícita ≠ incentivo implícito por conquistas). As RQ1/RQ3/RQ5/RQ7 do estudo
  original foram **excluídas por construção** por dependerem de comportamento interativo, níveis de
  conquista do plugin ou questionário — inexistentes quando o agente é uma IA que gera tudo de uma vez.
- **Interna** — **contaminação de dados de treino**: date-fns é pública e popular, então os modelos
  podem tê-la visto no treino; mede-se geração *condicionada ao prompt*, não capacidade "do zero".
  Parâmetros fixados por célula; golden-suite nunca exposta ao modelo. Três correções de setup
  (import `.js`→`.ts`, instalação do StrykerJS, `TZ=UTC`) são ameaças de reprodutibilidade mitigadas.
- **Conclusão** — a estocasticidade é tratada com K=10 e relato por distribuição, mas K=10 **limita a
  potência estatística** para efeitos pequenos.
- **Externa** — apenas **3 modelos** (amostra de conveniência) não generalizam para "IAs" em geral; a
  tarefa (date-fns, 11 funções simples) tem **poucos branches**, limitando a variância de
  cobertura/mutation; o desenho não capta uso interativo, manutenção ao longo do tempo nem
  colaboração humano-IA.

## Conclusão (síntese a escrever)

O estímulo de qualidade entregue via prompt aumenta a quantidade de testes (efeito grande), mas o
**modelo escolhido importa mais que o prompt**. Ao contrário dos humanos, as IAs não exibem o
trade-off quantidade×qualidade de forma acentuada. Trabalho futuro: mais modelos, tarefas com mais
branches e controle da contaminação de treino.
