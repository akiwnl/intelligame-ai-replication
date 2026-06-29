#!/usr/bin/env python3
"""Le um log de dry-run do Stryker e exclui os testes que falharam, antes de mutar.

Por que pela otica do Stryker (e nao do Jest puro): varios testes gerados mockam
`global.Date` num beforeAll para fixar o "agora". O runner do Stryker quebra esse mock
(o Jest normal nao) — ora fazendo testes de data falharem, ora estourando a pilha
("Maximum call stack size exceeded") dentro do proprio beforeAll. Detectamos as falhas
no log do Stryker (stack trace com `src/<func>/test.ts:<linha>`) e:
  1) se a linha esta dentro de um `it(...)`/`test(...)`, marcamos SO esse teste com `.skip`;
  2) se a falha esta no setup (beforeAll/describe) e nao da para pular um teste individual,
     excluimos o arquivo de teste INTEIRO daquela funcao (fallback).
Espelha "failing tests were excluded from the mutation analysis" do estudo original.

Uso:  skip_failing_by_line.py <stryker.log> <work_dir>
Imprime no stdout o numero de testes excluidos nesta rodada (skips + testes de arquivos removidos).
0 = nenhum progresso possivel.
"""
import re
import sys
from pathlib import Path

log = Path(sys.argv[1]).read_text(encoding="utf-8", errors="replace")
work = Path(sys.argv[2])

IT_RE = re.compile(r"\b(it|test)(\.\w+)?\s*\(")
COUNT_RE = re.compile(r"\b(?:it|test)(?:\.\w+)?\s*\(")

# stack traces apontam para .../sandbox-XXXX/src/<func>/test.ts:<linha>:<col>
by_file = {}
for m in re.finditer(r"/src/([^\s:]+?test\.ts):(\d+)", log):
    by_file.setdefault(m.group(1), set()).add(int(m.group(2)))

excluded = 0
for rel, lines in by_file.items():
    f = work / "src" / rel
    if not f.exists():
        continue
    src = f.read_text(encoding="utf-8").splitlines()
    skipped_here = 0
    for line in sorted(lines):
        # anda para tras a partir da linha do erro ate achar o it(/test( que a envolve
        i = min(line - 1, len(src) - 1)
        while i >= 0:
            m = IT_RE.search(src[i])
            if m:
                if not m.group(2):  # ainda nao tem .skip/.only/etc.
                    e = m.end(1)
                    src[i] = src[i][:e] + ".skip" + src[i][e:]
                    skipped_here += 1
                break
            i -= 1
    if skipped_here:
        f.write_text("\n".join(src) + "\n", encoding="utf-8")
        excluded += skipped_here
    else:
        # falha no setup (beforeAll/describe): exclui o arquivo inteiro como fallback
        n_tests = len(COUNT_RE.findall("\n".join(src))) or 1
        f.unlink()
        excluded += n_tests

print(excluded)
