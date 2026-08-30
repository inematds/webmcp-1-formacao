# WebMCP Readiness

## Objetivo

Avaliar se um site está pronto para WebMCP sem permitir que o scanner realize ações
perigosas. A primeira versão deve produzir um relatório técnico reproduzível e um
plano de correção priorizado.

## Arquitetura proposta

```text
Interface web
    -> API de análise
        -> navegador isolado (Playwright/CDP)
            -> site avaliado
        -> motor de regras
        -> relatório JSON + HTML
```

Uma aplicação somente client-side não é suficiente para URLs arbitrárias por causa
das políticas de mesma origem, CORS e permissões. O navegador controlado deve rodar
em ambiente isolado, com limites de tempo, rede e credenciais descartáveis.

## Modos de avaliação

- **Passivo:** descobre APIs, formulários e ferramentas sem executá-las.
- **Leitura segura:** executa apenas ferramentas explicitamente classificadas como leitura.
- **Ambiente de teste:** permite testar mutações somente com autorização e dados descartáveis.

## Saídas

- pontuação geral e por categoria;
- inventário de ferramentas;
- evidências de cada verificação;
- bloqueadores de produção;
- recomendações ordenadas por impacto;
- relatório exportável em JSON e Markdown.

## Regra de segurança

O diagnóstico nunca deve confiar apenas em `readOnlyHint`, nome ou descrição. Na
dúvida, a ferramenta não é executada.

