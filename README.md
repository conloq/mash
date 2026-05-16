
# MASH


Sistema de automação do teste de iodo na produção de cerveja artesanal.

## 📖 Sobre

O MASH é um sistema desenvolvido para auxiliar no monitoramento e automação do teste de iodo durante a produção da cerveja artesanal.

O teste de iodo é utilizado para verificar a conversão do amido em açúcares fermentáveis durante a mosturação. O sistema busca facilitar esse controle, registrando resultados, automatizando processos e oferecendo maior confiabilidade para os produtores.
## 🎯 Objetivo

Automatizar e registrar o processo do teste de iodo, permitindo:

- Controle do andamento da mosturação;
- Registro dos testes realizados;
- Interface web para gerenciamento;
- Redução de erros manuais;
## 🛠 Tecnologias Utilizadas

#### Back-end
- Node.js
- Express.js
#### Banco de Dados
- MySQL
#### Front-end
- HTML5
- CSS3
- JavaScript
- EJS
## 📂 Estrutura do Projeto

```text
├── config/
│   ├── associations.js
│   ├── data-base.js
│   ├── multer.js
│   ├── sequelize-config.js
│   └── session.js
│
├── controller/
│   ├── cadastroController.js
│   ├── loginController.js
│   ├── receitaController.js
│   └── UsuarioController.js
│
├── middleware/
│   ├── globalInfoUserMiddleware.js
│   └── guestMiddleware.js
│
├── models/
│   ├── lodo.js
│   ├── log.js
│   ├── Receita.js
│   ├── Temperatura.js
│   └── Usuario.js
│
├── node_modules/
│
├── public/
│   ├── css/
│   ├── icons/
│   ├── img/
│   ├── js/
│   └── uploads/
│
├── routes/
│   ├── receitaRoutes.js
│   ├── route.js
│   └── usuarioRoutes.js
│
├── services/
│   └── bcrypt.js
│
├── views/
│   ├── partials/
│   ├── adicionarLodo.ejs
│   ├── adicionarTemperatura.ejs
│   ├── cadastro.ejs
│   ├── editarLodo.ejs
│   ├── editarTemperatura.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── receita.ejs
│   └── usuario.ejs
│
├── .gitignore
├── index.js
├── package-lock.json
└── package.json
```
## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório
```git clone https://github.com/kevinOLV2534/Sistema-MASH```
### 2️⃣ Instale as dependências
```npm install```
### 3️⃣ Configure o banco de dados
Crie um banco MySQL e execute o script:

```CREATE DATABASE cervejaria;```
### 4️⃣ Execute o projeto
```npm start```

O sistema ficará disponível em:

```http://localhost:3000```
## 👨‍💻 Desenvolvedores

Projeto Integrador desenvolvido para fins acadêmicos.

João Alexandre Pinto Camargo

Kevin da Silva Oliveira

Haimon Cugler Vieira

Jocieli Pontes Domingues da Silva
## Licença

Este projeto é destinado para fins educacionais e acadêmicos.