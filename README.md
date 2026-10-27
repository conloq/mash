# Mash

## Plataforma de Monitoramento da Etapa de Mosturação na Fabricação de Cerveja Artesanal

Projeto Integrador III do curso de Desenvolvimento de Software Multiplataforma (DSM3) da FATEC Registro, 2026.

## Papel deste repositório

`conloq/mash` guarda o protótipo monolítico inicial do projeto: uma aplicação Node.js com Express 5, EJS, Sequelize e MySQL no banco `cervejaria`, com autenticação por sessão e `bcrypt`. Ele registra a proposta antes da migração para API REST e permanece como referência histórica, sem receber novas funcionalidades.

O repositório também centraliza as Issues e o roteiro de execução do projeto na [#66](https://github.com/conloq/mash/issues/66). É lá que ficam os épicos, os contratos das rotas e o recorte vigente do semestre.

## Arquitetura atual (repositórios ativos)

O desenvolvimento acontece nos repositórios abaixo. Este repositório não faz parte do fluxo de execução do produto.

| Repositório | Conteúdo |
|---|---|
| [`conloq/Back-End`](https://github.com/conloq/Back-End) | API REST com Express 5, Sequelize, MySQL no banco `mash`, JWT e Argon2id |
| [`conloq/frontend`](https://github.com/conloq/frontend) | Aplicação web em EJS e Tailwind CSS, com sessão mantida no servidor |
| [`conloq/database`](https://github.com/conloq/database) | Documentação e diagramas MER do banco |
| [`conloq/documentation`](https://github.com/conloq/documentation) | Documentação técnica e acadêmica por área |
| [`conloq/landing-page-conloq`](https://github.com/conloq/landing-page-conloq) | Landing page institucional |

## Sobre o problema e a proposta

Na mosturação, as enzimas do malte degradam o amido e formam açúcares fermentescíveis e dextrinas. Controlar temperatura e tempo não confirma sozinho a ausência de amido residual: essa verificação costuma ser feita pelo teste de iodo, em que a coloração da amostra indica a presença de estruturas amiláceas.

A leitura visual varia com iluminação, reflexos, tonalidades intermediárias e percepção de cada operador, e raramente fica registrada de modo comparável entre lotes. O Mash reúne receitas, rampas de temperatura, lotes e leituras do teste de iodo em um fluxo único, com histórico rastreável, para que a decisão de encerrar a mosturação fique documentada e possa ser revista depois.

O recorte do semestre, os contratos das rotas e os artefatos acadêmicos estão na [#66](https://github.com/conloq/mash/issues/66) e em [`conloq/documentation`](https://github.com/conloq/documentation).

## Como executar o protótipo legado

Pré-requisitos: Node.js e um servidor MySQL local.

```bash
npm install
```

Crie o banco usado pelo protótipo:

```sql
CREATE DATABASE cervejaria;
```

Confira as credenciais em `config/sequelize-config.js` se o seu MySQL não usar `root` sem senha e suba a aplicação:

```bash
npm start
```

O servidor escuta em `http://localhost:8080`. O protótipo cria as tabelas por `sync()` na inicialização, sem migrations.

O desenvolvimento atual ocorre em `conloq/Back-End` e `conloq/frontend`; mudanças de produto não devem ser feitas aqui.

## Equipe

| Integrante | Atuação |
|---|---|
| Haimon Cugler Vieira | Product Manager, frontend e backend |
| Team Lead (papel rotativo) | Product Owner |
| João Alexandre Pinto Camargo | Backend |
| Jocieli Pontes Domingues da Silva | Artigo e documentação |
| Kevin da Silva Oliveira | Design |

Curso: Desenvolvimento de Software Multiplataforma (DSM3), FATEC Registro, 2026.
