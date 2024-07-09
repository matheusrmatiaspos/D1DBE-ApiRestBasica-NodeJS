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
```bash
node server.js
```