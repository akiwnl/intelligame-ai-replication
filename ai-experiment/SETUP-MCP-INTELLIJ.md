# Apêndice opcional — níveis do IntelliGame via MCP (FORA do escopo atual)

Só relevante se for exigido reproduzir os "níveis de conquista" do IntelliGame. **Não faz parte do
caminho crítico** desta replicação (ver `THREATS-TO-VALIDITY.md` para o porquê da exclusão).

Topologia: IntelliJ no **Windows**, Claude Code no **WSL2**.

## Passos

- **IntelliJ:** `Settings | Tools | MCP Server` → Enable + Brave mode; `Debugger` → "Can accept
  external connections to built-in server" (porta 63342); criar uma run config de testes.
- **Rede WSL→Windows:** `networkingMode=mirrored` no `.wslconfig` (recomendado) **ou** NAT com
  `HOST=172.20.112.1` + firewall liberando a porta 63342.
- **Conectar:**
  `claude mcp add jetbrains -e IDE_PORT=63342 -e HOST=172.20.112.1 -- npx -y @jetbrains/mcp-proxy`
  → **reiniciar o Claude Code** → validar disparando a run config e checando se
  `.evaluation/TestReport.csv` atualiza.

## Limites

- O MCP conecta a um IDE **já aberto** (não "abre" o app).
- Roda testes (✅) e debug (provável), mas **não** expõe "run with coverage" → conquistas de cobertura
  zeram.
- Ferramentas MCP só carregam **após reiniciar** a sessão.

## Pontuação dos níveis (se aplicável)

`score_testreport.py`: somar as 26 colunas de nível do `TestReport.csv` = "Levels".
