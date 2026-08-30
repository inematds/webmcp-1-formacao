# Formação WebMCP — do Zero ao Expert

Repositório central da formação. Apresenta a visão completa das quatro fases, os
pré-requisitos, a progressão pedagógica e os critérios de certificação.

Este repositório também abriga o **WebMCP Readiness**, aplicativo que analisa um
site e responde se ele está preparado para ser descoberto e operado por agentes.

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

Veja [docs/arquitetura-dos-repos.md](docs/arquitetura-dos-repos.md) e
[apps/webmcp-readiness/README.md](apps/webmcp-readiness/README.md).

## Progressão entre repositórios

A passagem entre fases segue um manifesto comum e preserva o estado da camada de
aprendizagem INEMA. A arquitetura completa está em
[docs/progressao-automatica.md](docs/progressao-automatica.md).

## Executar o Repo 1

Requisitos: Node.js 20+ e Chromium instalado.

```bash
npm install
npm start
```

Abra `http://127.0.0.1:4173`.

O scanner bloqueia redes privadas por padrão. Para analisar aplicações locais durante
o desenvolvimento:

```bash
ALLOW_PRIVATE_TARGETS=1 npm start
```

Se o Chromium não estiver em `/snap/bin/chromium`, informe o executável:

```bash
CHROMIUM_PATH=/caminho/para/chromium npm start
```

## Entregas implementadas

- landing responsiva da formação;
- mapa das quatro fases e seis repositórios;
- progresso, jornada e preferências de leitura INEMA v2;
- formulário declarativo `analisar_prontidao_webmcp`;
- scanner passivo com Playwright Core;
- descoberta de ferramentas declarativas e imperativas;
- classificação de compatibilidade, schemas, riscos, permissões e fallback;
- relatório visual e exportação JSON;
- bloqueio SSRF para redes privadas, inclusive em recursos e redirecionamentos;
- testes estruturais com `npm run check`.
