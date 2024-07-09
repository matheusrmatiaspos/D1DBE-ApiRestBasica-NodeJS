# 🌐 Testes - API Rest básicas (Node JS)

A Atividade consiste na criação de duas APIs Rest (cada uma em uma linguagem de programação diferente)

## 🚧 Proposta

- Criação de duas APIs Rest (cada uma em uma linguagem de programação diferente)

- Cada API deve conter 5 rotas/endpoints, além do padrão ("/"). Cada rota deve responder às requisições GET e POST.

- Os GETs deve retornar um JSON com no mínimo 3 registros com 5 campos cada. (Ex: produtos, livros, clientes, carros, etc...)

- Os POSTs devem apenas logar no console do servidor os dados enviados pelo cliente, uma vez que ainda não estamos trabalhando com banco de dados.

- As linguagens são apenas exemplos. O(A) aluno(a) é livre para escolher a linguagem desejada.

- Usar qualquer ferramenta para testes da API (Curl, Postman, Insomnia, Insomnium, etc.). Se desejar visualizar o resultado em um navegador, utilizar alguma extensão para facilitar a visualização do JSon.

### 👉🏻 Sobre a API
- Tema: Biblioteca 📖
#### ⚡ Os Endpoints
```
GET      - / 
GET/POST - /autores 
GET      - /autor/{id}
GET/POST - /livros 
GET      - /livro/{id}
GET/POST - /categorias 
GET      - /categoria/{id}
GET/POST - /editoras 
GET      - /editora/{id}
GET/POST - /usuarios 
GET      - /usuario/{id}
```

### 🏁 Iniciando a Api
Utilizei o Express para construir esta API, logo, para que a mesma funcione é necessário realizar sua instalação através do comando:
```bash
npm install express
```
Com o Express instalado é possível inicializar a aplicação através do comando:
```bash
node server.js
```

### 🎟️ Acessando EndPoints com Curl
- /
```bash
curl -X GET http://localhost:8080/

// Bem-vindo a API Node JS
```

- /autores [GET]
```bash
curl -X GET http://localhost:8080/autores
// {"authors":{"data":[{"id":"1","name":"Harper Lee","birth_year":1926,"nationality":"Americana","books_written":2},{"id":"2","name":"George Orwell","birth_year":1903,"nationality":"Inglês","books_written":9},{"id":"3","name":"Jane Austen","birth_year":1775,"nationality":"Inglês","books_written":6}]}}birth_year":1974,"nationality":"British","movies_starred":45}]
```

- /autores [POST]
```bash
curl -X POST -H 'Content-Type: application/json' -d '{"id": "4","name": "F. Scott Fitzgerald","birth_year": 1896,"nationality": "Americano","books_written":5}' http://localhost:8080/autores
// {"id":"4","name":"F. Scott Fitzgerald","birth_year":1896,"nationality":"Americano","books_written":5}
```
- /autor/1
```bash
curl -X GET http://localhost:8080/autor/1
// {"id":"1","name":"Harper Lee","birth_year":1926,"nationality":"Americana","books_written":2}
```

### 📒 Disciplina
D1DBE - Desenvolvimento Back-End I

### 🚩 Outra API (GoLang)
Clique [aqui](https://github.com/matheusrmatiaspos/D1DBE-ApiRestBasica-GoLang) para acessar a outra api desenvolvida com essa mesma proposta, porém com um tema e linguagem diferentes.