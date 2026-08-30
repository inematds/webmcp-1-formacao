# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Inferido do briefing: HTML, CSS e JavaScript progressivos no frontend, Node.js no
scanner e Playwright Core para inspeção controlada do navegador. Sem framework de UI.

## Users

Desenvolvedores web, construtores de agentes, profissionais de automação, equipes de
produto e agências que precisam avaliar, adaptar ou criar sites para WebMCP.

## Product Purpose

O Repo 1 é a porta de entrada da Formação WebMCP. Ele explica a jornada completa,
mede a prontidão inicial de um site e encaminha o aluno à fase correta.

Sucesso significa que uma pessoa consegue entender as quatro fases, analisar uma URL,
identificar bloqueadores e iniciar a formação com um plano de ação concreto.

## Positioning

O diagnóstico não se limita a procurar atributos no HTML: ele abre o site em um
navegador isolado, reúne evidências declarativas e imperativas e produz recomendações
sem executar ferramentas mutáveis.

## Operating Context

O produto é usado localmente ou publicado como aplicação web. O aluno trabalha com
URLs próprias, relatórios JSON, navegadores experimentais, DevTools e os repositórios
das quatro fases.

## Capabilities and Constraints

- Apresenta o currículo completo e a progressão entre fases.
- Analisa URLs HTTP/HTTPS por um navegador descartável.
- Opera somente em modo passivo no MVP.
- Bloqueia redes privadas por padrão; inspeção local exige autorização por variável de ambiente.
- Não pode provar autorização de backend ou segurança de negócio apenas pela página.
- WebMCP continua experimental; os resultados registram navegador e ambiente observados.
- Progresso usa a camada `formato-curso-v2`, com JSON como fallback portátil.

## Brand Commitments

Nome: Formação WebMCP — Sites e Agentes do Zero ao Expert.

Identidade vinculante: padrão INEMA.CLUB `formato-curso-v2`, dark-first, âmbar/ciano,
diagramas SVG técnicos, voz direta e profissional, sem gamificação manipulativa.

## Evidence on Hand

- Plano integral em `docs/plano-geral.md`.
- Relatório de análise em `docs/relatorio-analise-plano-webmcp.md`.
- Arquitetura dos seis repositórios em `docs/arquitetura-dos-repos.md`.
- Contrato de progressão em `docs/progressao-automatica.md`.
- Não há depoimentos, clientes, benchmarks de mercado ou certificações externas; não fabricar.

## Product Principles

- Diagnosticar com evidência, não com promessa.
- Nunca executar mutações durante uma análise passiva.
- Manter a interface humana funcional e compreensível.
- Fazer o progresso sobreviver a páginas, fases e falhas de armazenamento.
- Fixar versões e tornar limitações experimentais visíveis.

## Accessibility & Inclusion

O conteúdo deve funcionar com teclado, zoom, leitores de tela, movimento reduzido e
temas claro, sépia, foco e alto contraste. O JavaScript é melhoria progressiva: o
conteúdo essencial permanece legível sem ele.

