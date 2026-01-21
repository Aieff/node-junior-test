# 🚀 API REST Node.js — Teste Técnico (Backend)

API REST desenvolvida em **Node.js**, aplicando boas práticas de arquitetura, autenticação com **JWT**, validação de dados, controle de acesso e **testes automatizados**.

O sistema permite que usuários se cadastrem, façam login e gerenciem **apenas as suas próprias tarefas**, com todas as rotas sensíveis protegidas por autenticação.

---

## 📌 Funcionalidades

- Cadastro de usuários
- Autenticação com JWT (login)
- CRUD completo de tarefas
- Rotas protegidas por autenticação
- Isolamento de dados por usuário (cada usuário acessa apenas suas tarefas)
- Validação de dados com **Zod**
- Testes automatizados de API

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express** — framework web
- **Prisma ORM** — acesso ao banco de dados
- **SQLite** — banco de dados (ambiente de desenvolvimento)
- **jsonwebtoken (JWT)** — autenticação
- **bcrypt** — hash de senhas
- **Zod** — validação de entradas
- **Jest** — testes automatizados
- **Supertest** — testes de API
- **dotenv** — variáveis de ambiente

---

## 📁 Estrutura do Projeto

```bash
node-junior-test/
├── app.js
├── server.js
├── routes/
├── controllers/
├── services/
├── middlewares/
├── validators/
├── config/
├── tests/
│   ├── auth.test.js
│   └── tasks.test.js
└── prisma/
    ├── schema.prisma
    └── migrations/
```

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
cd node-junior-test
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo **.env** na raiz do projeto:

```env
PORT=3030
DATABASE_URL="file:./dev.db"
JWT_SECRET="uma_chave_super_secreta"
```

### 4️⃣ Rodar as migrations do banco de dados

```bash
npx prisma migrate dev
```

### 5️⃣ Iniciar o servidor

```bash
npm run dev
```

Servidor disponível em:

👉 **http://localhost:3030**

---

## 🧪 Rodar Testes Automatizados

```bash
npm test
```

Os testes cobrem:

- Cadastro de usuário
- Login
- Autorização com JWT
- CRUD de tarefas
- Regras de acesso e isolamento de dados

---

## 🔐 Autenticação

A autenticação é feita via **JWT**.

Após o login, o token deve ser enviado no header das requisições protegidas:

```http
Authorization: Bearer <token>
```

---

## 📚 Documentação da API (Swagger)

Este projeto possui **documentação interativa da API** utilizando **Swagger (OpenAPI)**, permitindo visualizar, entender e testar todos os endpoints diretamente pelo navegador.

### 🔗 Acessar Swagger UI

Após iniciar o servidor, acesse:

👉 **http://localhost:3030/api-docs**

---

### ✨ O que é possível fazer no Swagger

- Visualizar todas as rotas da API
- Ver parâmetros, body e respostas esperadas
- Testar endpoints diretamente pela interface
- Autenticar com JWT usando Bearer Token
- Facilitar o entendimento e os testes da API

---

### 🔐 Autenticação no Swagger

Para testar rotas protegidas:

1. Clique em **Authorize**
2. Informe o token no formato:

```text
Bearer SEU_TOKEN_AQUI
```

3. Confirme e utilize os endpoints protegidos

---

### 🧠 Tecnologias de Documentação

- **Swagger UI Express**
- **Swagger JSDoc** (OpenAPI 3.0)

---

### 📌 Observação

A documentação é gerada automaticamente a partir de comentários no código (`@swagger`), garantindo que a documentação esteja sempre alinhada com a implementação da API.

---

## 📄 Observações Gerais

- Foco em organização de código, segurança, validação e testes.
- Banco de dados SQLite utilizado apenas para desenvolvimento.

---


