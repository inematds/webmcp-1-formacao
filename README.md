# Formação WebMCP — do Zero ao Expert

Repositório central da formação. Apresenta a visão completa das quatro fases, os
pré-requisitos, a progressão pedagógica e os critérios de certificação.

O diagnóstico inicial é realizado pelo **WebMCP Readiness**, aplicativo independente
que analisa um site e responde se ele está preparado para ser descoberto e operado
por agentes.

## As quatro fases

1. **WebMCP Builder** — fundamentos, ambiente e ferramentas declarativas e imperativas.
2. **WebMCP Integrator** — desenho de ferramentas, estado, migração e frameworks.
3. **WebMCP Agent Developer** — descoberta, execução e loop conversacional.
4. **WebMCP Expert** — segurança, backend/MCP, evals, produção e governança.

## Aplicativo WebMCP Readiness

O diagnóstico deve receber uma URL, abrir o site em um navegador controlado e gerar
um relatório com:

- compatibilidade do navegador e disponibilidade de `document.modelContext`;
- contexto seguro, origem e políticas de permissão;
- ferramentas declarativas e imperativas encontradas;
- validade dos nomes, descrições e schemas;
- classificação entre leitura, mutação e ação crítica;
- confirmações humanas e controles contra duplicidade;
- respostas estruturadas, cancelamento e tratamento de erros;
- sincronização entre execução da ferramenta e atualização da interface;
- riscos de segurança e conteúdo não confiável;
- fallback, observabilidade e prontidão para produção.

O resultado terá nota, evidências e recomendações, sem executar automaticamente
ações mutáveis ou irreversíveis.

Use o aplicativo em [webmcp.inema.pro](https://webmcp.inema.pro/) ou consulte o
[repositório público](https://github.com/inematds/webmcp-readiness). Veja também
[docs/arquitetura-dos-repos.md](docs/arquitetura-dos-repos.md).

## Progressão entre repositórios

A passagem entre fases segue um manifesto comum e preserva o estado da camada de
aprendizagem INEMA. A arquitetura completa está em
[docs/progressao-automatica.md](docs/progressao-automatica.md).

## Executar o Repo 1

O conteúdo é estático. Abra `index.html` ou publique a raiz com qualquer servidor
HTTP. Para validar a estrutura, use `npm run check`.

## Entregas implementadas

- landing responsiva da formação;
- mapa das quatro fases e seis repositórios;
- progresso, jornada e preferências de leitura INEMA v2;
- integração com o WebMCP Readiness independente;
- diagnóstico, relatório e exportação JSON em `webmcp.inema.pro`;
- testes estruturais com `npm run check`.
