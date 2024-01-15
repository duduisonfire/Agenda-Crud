# Agenda-CRUD

Olá, bem vindo, me chamo Igor Tiburcio Cavalcanti e este é um projeto que criei ao longo dos meus estudos em JavaScript.

Este é um projeto CRUD (Create, Read, Update, Delete) criado para ser uma agenda onde você pode cadastrar contatos apenas com o primeiro nome e email ou telefone.

Layout totalmente responsivo.

Você pode pré-visualizar este projeto no link: https://igor-crud-agenda.herokuapp.com/


# Técnologias

Este é um projeto com front-ende e back-end completos, foram usadas as seguintes técnologias para o desenvolvimento da aplicação.

 1. HTML: Para criar a marcação dos objetos da página.
 2. Bootstrap 5: Para fazer a estilização via CSS da aplicação.
 3. NodeJS: A servidor da aplicação foi criado em JavaScript utilizando o NodeJS como ferramenta back-end para interpretar e executar o servidor.
 4. ExpressJS: O servidor foi montado com auxílio do módulo ExpressJS.
 5. MongoDB: Como banco de dados foi utilizado o MongoDB, banco de dados não relacional, por sua boa comunicação com o NodeJS.
 6. Mongoose: Para fazer a conexão com o banco de dados foi utilizado o módulo Mongoose do NodeJS.
 7. EJS: Para renderização das páginas entregues no front-end.
 8. Express-Session: Para salvar as seções dos usúarios.
 9. Connect-Mongo: Para deixar as seções salvas no banco de dados.
 10. CSURF: Para criar tokens nos forms do HTML e evitar ataques CSRF.
 11. Helmet: Para proteger a aplicação configurando os cabeçalhos HTTP de forma adequada.

Foram utilizadas algumas outras aplicações menos importantes como o webpack e o babel para a organização do código, mas estas podem ser averiguadas diretamente no código fonte.

## Funcionamento da aplicação

A aplicação é composta de basicamente três páginas, a página principal, onde são listados os contatos cadastrados, a página de login e criação de conta e uma página para editar os contatos que já existem.

A aplicação foi construída no padrão MVC, separando os models, views e controllers em camadas diferentes para facilitar a manutenção do código e melhorar a organização do projeto.

O banco de dados é modelado com três tipos de documentos, as sessions, os contatos salvos e as contas criadas, todos tendo integração em código.

Caso você queira testar a aplicação localmente você precisará criar um arquivo ‘.env’ na pasta raiz do projeto contendo as variáveis ‘CONNECTIONSTRING’ que ficara o endereço do banco de dados Mongo, e ‘PORT’ que indicará em qual porta o servidor vai escutar.

Para iniciar o servidor use o comando "npm run devStart" ou "npm run stat" (caso esteja utilizando o Heroku).

---

# Contact Book-CRUD

Hello, welcome, my name is Igor Tiburcio Cavalcanti and this is a project that cried throughout my JavaScript studies.

This is a CRUD project (Create, Read, Update, Delete) created to be an Contact Book where you can register contacts only with first name and email or phone number.

Fully responsive layout.

You can preview this project at the link: https://igor-crud-agenda.herokuapp.com/


# Technologies

This is a project with a complete front-end and back-end, which were used as the following technologies for the development of the application.

 1. HTML: To create markup for page objects.
 2. Bootstrap 5: To style the application via CSS.
 3. NodeJS: An application server was created in JavaScript using NodeJS as a back-end tool to interpret and execute the server.
 4. ExpressJS: The server was built using the ExpressJS module.
 5. MongoDB: As a database was used in MongoDB, non-relational database, for its good communication with NodeJS.
 6. Mongoose: To make the connection with the database, it was used in the Mongoose module of NodeJS.
 7. E: For rendering contracted J pages without front-end.
 8. Express-Session: To save user sessions.
 9. Connect-Mongo: To leave the sections saved in the database.
 10. CSURF: To create tokens in HTML forms and avoid CSRF.
 11. Helmet: To protect an application by setting the HTTP headers properly.

Some other less important applications like webpack and babel were used to organize the code, but these can be checked directly in the source code.

## Application operation

The creation of main applications, where the contacts of registered contacts are contacts, the login page and a page to edit the contacts that already exist.

The application was built in the MVC pattern, separating models, views and controllers into different layers to facilitate code maintenance and improve project organization.

The database is modeled with three types of documents, sessions, saved contacts and created accounts, all having code integration.

If you want to test a database locally you create a '.env' project in the root folder of the database containing as variables 'CONNECTIONSTRING' which will be the Mongo data address, and 'PORT' which will indicate which port the server goes to listen.

To start the server use the command "npm run devStart" or "npm run start" (if using Heroku).
