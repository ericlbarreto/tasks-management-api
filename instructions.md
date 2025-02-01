## Step 1: Setup the project

1. Use NestJS to create a new project with express.
2. Use TypeOrm as the ORM.
3. Use TypeScript for the language.
4. Use Jest for the testing framework.
5. Use ESLint for the code style.
6. Use Prettier for the code formatting.
7. Use Husky for the git hooks.
8. Use Lint Staged for the git hooks.

## Step 2: Setup the database

1. Use PostgreSQL as the database.
2. Use TypeOrm as the ORM.

## Step 3: Setup the authentication


## Step 4: All the api endpoints/instructions
    - The routes should be all in english also

Desafio Back-end: Construção de uma API RESTful para Gerenciamento de Tarefas
Objetivo
Desenvolver uma API RESTful que permita a criação, leitura, atualização e exclusão de tarefas, bem como filtragem de tarefas com base no seu status. A aplicação deve ser construída com boas práticas de desenvolvimento, modularização de código, validação de dados e interação com um banco de dados.
Descrição da Tarefa
Você deverá criar uma API que possibilite as seguintes operações:
Criar uma tarefa (POST /tarefas):
A tarefa deve possuir as seguintes propriedades:
Título: (String, obrigatório)
Descrição: (String, opcional)
Status: (String, obrigatório – valores possíveis: "pendente", "realizando", "concluída")
Data de vencimento: (Date, opcional, deve ser uma data válida)
Exemplo de requisição (JSON):

{
  "titulo": "Estudar API",
  "descricao": "Estudar como criar uma API RESTful",
  "status": "pendente",
  "data_vencimento": "2024-12-31"
}

Listar todas as tarefas (GET /tarefas):

Retornar todas as tarefas cadastradas no sistema.
A resposta deve ser uma lista de tarefas, com seus respectivos detalhes.
Exemplo de resposta (JSON):

[
  {
    "id": 1,
    "titulo": "Estudar API",
    "descricao": "Estudar como criar uma API RESTful",
    "status": "pendente",
    "data_vencimento": "2024-12-31"
  },
  {
    "id": 2,
    "titulo": "Finalizar projeto",
    "descricao": "Finalizar o projeto de API",
    "status": "realizando",
    "data_vencimento": "2024-12-25"
  }
]
Buscar uma tarefa por ID (GET /tarefas/{id}):
Permitir buscar detalhes de uma tarefa específica pelo seu ID.
Exemplo de resposta (JSON):

{
  "id": 1,
  "titulo": "Estudar API",
  "descricao": "Estudar como criar uma API RESTful",
  "status": "pendente",
  "data_vencimento": "2024-12-31"
}
Atualizar uma tarefa (PUT /tarefas/{id}):
Permitir a atualização das informações de uma tarefa, como título, descrição, status ou data de vencimento.
A requisição deve permitir a modificação de qualquer uma dessas propriedades.
Exemplo de requisição (JSON):

{
  "titulo": "Estudar API - Revisão",
  "descricao": "Revisar os conceitos de API RESTful",
  "status": "realizando",
  "data_vencimento": "2024-12-28"
}
Excluir uma tarefa (DELETE /tarefas/{id}):
Permitir a remoção de uma tarefa pelo seu ID.
Filtrar tarefas por status (GET /tarefas?status={status}):
Permitir a filtragem das tarefas com base no status, onde o parâmetro status pode ter os valores: "pendente", "realizando", ou "concluída".
Exemplo de requisição:

GET /tarefas?status=pendente


Tecnologias e Ferramentas
Banco de Dados: PostgresSQL
Ferramentas recomendadas para organização do projeto:
Postman/Insomnia para testar a API.
GitHub para versionamento e publicação do código.

Requisitos de Implementação
Validação de Dados:
O título e o status são obrigatórios.
A data de vencimento (se fornecida) deve ser uma data válida. Caso contrário, deve ser tratada como não fornecida.
Respostas HTTP:
Use respostas HTTP apropriadas:
200 OK para operações bem-sucedidas.
201 Created para criação de novos recursos.
400 Bad Request para erros de validação.
404 Not Found para quando o recurso não for encontrado.
500 Internal Server Error para erros no servidor.
Organização Modular do Código:
Separe as diferentes funcionalidades da API em módulos. Por exemplo, tenha um módulo para o gerenciamento de tarefas, um módulo para a conexão com o banco de dados, etc.