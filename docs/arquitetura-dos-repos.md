# Arquitetura da formação em seis repositórios

| Repo | Papel | Resultado principal |
|---|---|---|
| 01 — Formação | Porta de entrada, currículo e diagnóstico | Plano individual + relatório de prontidão |
| 02 — Builder | Fase 1 | Site com ferramentas declarativas e imperativas |
| 03 — Integrator | Fase 2 | Site existente migrado progressivamente |
| 04 — Agent Developer | Fase 3 | Agente que descobre e executa ferramentas |
| 05 — Expert | Fase 4 | Solução protegida, avaliada e publicável |
| 06 — Agent Hub | Produto público | Cliente WebMCP pronto para conectar agentes e sites |

## Princípio de separação

Os repositórios 02 a 05 são ambientes de aprendizagem e podem conter branches,
tags, exercícios e soluções. O repositório 06 é um produto independente: não deve
depender do material do curso para ser instalado e utilizado.

## Fluxo recomendado

1. O aluno informa uma URL no WebMCP Readiness.
2. O diagnóstico identifica lacunas e recomenda módulos.
3. O aluno desenvolve suas competências nos repos 02 a 05.
4. O mesmo site passa novamente pelo diagnóstico.
5. O site aprovado é testado no Agent Hub do repo 06.

