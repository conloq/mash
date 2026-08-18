# MASH

Sistema de apoio ao monitoramento da mosturação e à realização do teste de iodo na produção de cerveja artesanal.

> Projeto Integrador desenvolvido pela equipe Conloq para fins acadêmicos.
>
> **Título do projeto:** Plataforma de Monitoramento da Etapa de Mosturação na Fabricação de Cerveja Artesanal.

## Sobre o projeto

O MASH propõe uma plataforma acessível para apoiar pequenos produtores no acompanhamento da etapa de mosturação, na qual o amido presente nos grãos é convertido em açúcares fermentáveis.

A proposta contempla o registro de informações do processo, o acompanhamento da temperatura, o apoio à interpretação do teste de iodo e a rastreabilidade das análises. A visão computacional com Python e OpenCV é prevista para auxiliar na identificação de amido residual por características de cor.

As funcionalidades descritas como proposta não devem ser tratadas como resultados comprovados. A versão atual do projeto está concentrada na especificação da proposta e na definição do protocolo de validação, ainda sem resultados experimentais medidos.

## Objetivos

- Apoiar o acompanhamento da etapa de mosturação;
- Monitorar e registrar temperaturas do processo;
- Registrar e consultar resultados do teste de iodo;
- Apoiar a detecção de amido residual por visão computacional;
- Reduzir erros de interpretação e anotações manuais;
- Centralizar as informações do processo em uma interface web;
- Facilitar a rastreabilidade das operações realizadas.

## Estado atual

O repositório contém uma aplicação web com servidor Express, páginas renderizadas com EJS, persistência em MySQL e modelos Sequelize para usuários, receitas, temperaturas, registros e teste de iodo.

A automação por visão computacional/OpenCV, o controle de temperatura e outros recursos previstos no escopo acadêmico devem ser considerados implementados somente quando estiverem disponíveis e validados no código do projeto.

O projeto ainda não apresenta resultados experimentais de desempenho, precisão, acurácia, redução de tempo, redução de desperdícios, melhoria de rendimento ou repetibilidade do produto.

## Tecnologias

### Backend

- Node.js;
- Express 5;
- Sequelize;
- EJS;
- bcrypt;
- express-session;
- connect-session-sequelize;
- Multer.

### Banco de dados

- MySQL;
- mysql2.

### Frontend

- HTML5;
- CSS3;
- JavaScript;
- EJS.

### Visão computacional prevista

- Python;
- OpenCV;
- Processamento e análise de imagens do teste de iodo.

> Os itens de visão computacional devem ser confirmados no código e nos testes antes de serem descritos como funcionalidades implementadas.

## Estrutura do projeto

```text
.
├── config/
│   ├── associations.js
│   ├── data-base.js
│   ├── multer.js
│   ├── sequelize-config.js
│   └── session.js
├── controller/
│   ├── cadastroController.js
│   ├── loginController.js
│   ├── receitaController.js
│   └── UsuarioController.js
├── middleware/
│   ├── globalInfoUserMiddleware.js
│   └── guestMiddleware.js
├── models/
│   ├── Iodo.js
│   ├── log.js
│   ├── Receita.js
│   ├── Temperatura.js
│   └── Usuario.js
├── public/
│   ├── css/
│   ├── icons/
│   ├── img/
│   ├── js/
│   └── uploads/
├── routes/
│   ├── receitaRoutes.js
│   ├── route.js
│   └── usuarioRoutes.js
├── services/
│   └── bcrypt.js
├── tests/
├── tools/
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## Pré-requisitos

- Node.js instalado;
- npm instalado;
- MySQL em execução;
- Git, caso o projeto seja obtido por clonagem.

## Instalação e execução

### 1. Clone o repositório

```bash
git clone https://github.com/kevinOLV2534/Sistema-MASH.git
cd Sistema-MASH
```

Se o repositório já estiver disponível localmente, entre diretamente na pasta do projeto:

```bash
cd mash-audit
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Crie um banco MySQL para a aplicação:

```sql
CREATE DATABASE cervejaria;
```

Depois, confira e ajuste as credenciais e os parâmetros de conexão em:

```text
config/sequelize-config.js
```

Não versionem senhas, tokens ou outras credenciais no repositório. Para uma configuração de produção, prefira variáveis de ambiente e um arquivo local ignorado pelo Git.

### 4. Inicie a aplicação

```bash
npm start
```

O script atual inicia o servidor por meio do Nodemon. Quando a aplicação estiver em execução, acesse:

```text
http://localhost:3000
```

## Testes e validação

A suíte atual contém testes do validador estrutural do MashOps. Execute:

```bash
npm test
python -m compileall -q tools tests
```

Para validar uma skill ou plugin sem executar o conteúdo inspecionado:

```bash
python tools/mashops_plugin_doctor.py /caminho/para/skill --json
```

O doctor é somente leitura: não instala dependências, não acessa a rede, não executa scripts do alvo e não corrige arquivos automaticamente. `PASS` significa apenas que os checks implementados não encontraram falhas; `REVIEW` exige inspeção manual.

Para a aplicação, a equipe também deve:

1. Executar a aplicação;
2. Validar manualmente o fluxo alterado;
3. Conferir os registros criados ou atualizados no banco;
4. Verificar a integração entre rotas, controllers, models e views;
5. Atualizar esta documentação quando o comportamento ou a configuração mudar.

## Equipe Conloq

| Integrante | Frente |
| --- | --- |
| João | Backend |
| Jocieli | Artigo e documentação |
| Kevin | Design |
| Haimon | Frontend |

Todos os integrantes participam das pesquisas e dos ensaios do projeto quando aplicável.

## Organização do trabalho

### Áreas

- **Backend:** API, banco de dados, OpenCV, processamento e regras de negócio;
- **Frontend:** interface, integração com a API, formulários, upload e experiência de uso;
- **Artigo:** artigo científico, documentação, referências e artefatos acadêmicos;
- **Design:** Figma, identidade visual, landing page, pitch, banner e materiais visuais;
- **Geral:** atividades que envolvem toda a equipe.

### Status das tarefas

- **Backlog:** tarefa identificada, mas ainda não priorizada;
- **Ready:** tarefa definida, com responsável e informações suficientes para começar;
- **In Progress:** tarefa em execução pelo responsável;
- **In Review:** tarefa concluída pelo responsável e aguardando revisão de outro integrante;
- **Testing / Validation:** tarefa revisada e em fase de testes ou validação;
- **Done:** tarefa implementada, revisada, testada, aceita e documentada.

### Prioridade

- 🔴 **Alta:** funcionalidade crítica ou necessária para a próxima entrega;
- 🟡 **Média:** tarefa importante, mas que não impede o funcionamento principal;
- 🟢 **Baixa:** melhoria que pode ser realizada depois das funcionalidades essenciais.

### Tipos de tarefa

- **Feature:** nova funcionalidade;
- **Bug:** correção de algo que não está funcionando corretamente;
- **Improvement:** melhoria de uma funcionalidade existente;
- **Research:** pesquisa ou levantamento técnico/científico;
- **Documentation:** artigo, documentação ou artefato acadêmico;
- **Design:** atividade de UX/UI ou material visual;
- **Test:** teste ou validação de funcionalidade.

### Critérios para mover uma tarefa para Done

Uma tarefa só deve ser movida para **Done** quando:

1. Foi implementada;
2. Foi revisada;
3. Foi testada;
4. Está funcionando conforme o escopo definido;
5. A documentação necessária foi atualizada.

## Ferramentas de apoio com IA

As ferramentas de IA são auxiliares e não substituem a análise, a revisão e a decisão da equipe.

### Artigo e documentação — Jocieli

**Prism** — https://openai.com/pt-BR/prism/

Uso recomendado:

- Apoio à escrita científica;
- Revisão e melhoria do texto;
- Organização das seções do artigo;
- Trabalho colaborativo em LaTeX;
- Apoio na busca e análise de literatura;
- Revisão de citações e referências;
- Organização da metodologia e dos resultados.

As informações científicas devem sempre ser verificadas nas fontes originais.

### Design e frontend — Kevin e Haimon

**Open Design** — https://open-design.ai/pt-br/

Uso recomendado:

- Explorar ideias de interface e referências visuais;
- Apoiar a construção de telas, componentes e layouts;
- Comparar a implementação com o design planejado;
- Trabalhar responsividade e consistência visual;
- Apoiar a criação da landing page, do pitch e de materiais visuais.

As decisões finais de UX/UI devem ser revisadas pelo responsável de Design. O código gerado com auxílio de IA deve ser revisado e adaptado ao padrão do projeto Mash.

### Backend — João

**OpenCode** — https://opencode.ai/

**Documentação:** https://opencode.ai/docs

Uso recomendado:

- Criar e revisar APIs e CRUDs;
- Trabalhar com banco de dados;
- Debugar erros e criar testes;
- Refatorar código;
- Auxiliar na integração entre Flask, Python e OpenCV;
- Revisar tratamento de erros e processamento de imagens.

Outras ferramentas similares também podem ser utilizadas quando fizer sentido para a tarefa, como Codex, GitHub Copilot, Cursor ou Claude Code.

### Opções gratuitas para a equipe

- **Top Tools AI:** https://top-tools-ai.com/docs
- **InternLM:** https://internlm.intern-ai.org.cn/api/document?lang=zh
- **OpenCode:** https://opencode.ai/docs/pt-br

Cada integrante deve utilizar sua própria API key. Chaves e tokens nunca devem ser enviados para o GitHub, incluídos no README ou compartilhados em canais públicos.

## Boas práticas para uso de IA

- Não utilizar código sem entender seu funcionamento;
- Revisar todo código gerado antes de realizar commit;
- Não inserir senhas, tokens, chaves de API ou informações sensíveis em ferramentas de IA;
- Validar referências acadêmicas diretamente nas fontes originais;
- Não utilizar referências bibliográficas, resultados ou funcionalidades inventados pela IA;
- Registrar alterações importantes no GitHub;
- Manter a documentação alinhada ao sistema realmente implementado;
- Utilizar IA como ferramenta de apoio, e não como substituição da análise da equipe.

## Convenção de commits

Use o formato:

```text
<tipo>: descrição curta da alteração
```

Tipos permitidos:

- `feat`: nova funcionalidade;
- `fix`: correção de erro;
- `refactor`: reorganização sem mudança de comportamento;
- `test`: criação ou alteração de testes;
- `docs`: documentação;
- `style`: formatação ou alteração visual sem mudança de lógica;
- `chore`: configuração, dependências ou manutenção.

Exemplos:

```bash
git commit -m "feat: adicionar registro de teste de iodo"
git commit -m "fix: validar receita associada ao lote"
git commit -m "test: adicionar testes do CRUD de receitas"
git commit -m "docs: atualizar instruções de instalação"
```

### Regras para commits

- Usar uma descrição curta e objetiva;
- Preferir verbo de ação claro;
- Não incluir credenciais ou dados sensíveis;
- Relacionar o commit à issue correspondente, quando aplicável;
- Evitar misturar alterações de frentes diferentes;
- Revisar e testar antes de realizar o commit.

## Licença

Este projeto é destinado a fins educacionais e acadêmicos.

## Desenvolvedores

- João Alexandre Pinto Camargo;
- Kevin da Silva Oliveira;
- Haimon Cugler Vieira;
- Jocieli Pontes Domingues da Silva.

> Este README descreve o estado conhecido do repositório e a proposta acadêmica. Novas funcionalidades só devem ser documentadas como implementadas após validação no código e nos testes correspondentes.

## Fonte da atualização

Conteúdo de referência: `message.txt`, fornecido pela equipe Conloq em 18/08/2026.
