//IMPORTS
require('dotenv').config() //Importando o módulo DOTENV por meio de require.
const express = require('express'); //Importando o módulo EXPRESS por meio de require.
const app = express(); //Atribuindo o EXPRESS na constante 'app'.
const session = require('express-session'); //Importando o módulo EXPRESS-SESSION (PERMITE SALVAR SEÇÃO) por meio de require.
const MongoStore = require('connect-mongo'); //Importando o módulo CONNECT-MONGO (SALVA A SEÇÃO NO MONGO) por meio de require.
const flashMessage = require('connect-flash'); //Importando o módulo CONNECT-FLASH (EMITIR FLASH MESSAGES) por meio de require.
const route = require('./src/routes.js'); //Importando as rotas do servidor.
const path = require('path'); //Importando o módulo PATH por meio de require.
const helmet = require('helmet'); //Importando o módulo HELMET por meio de require.
const csrf = require('csurf'); //importando o módulo MONGOOSE por meio de require.
const middleware = require('./src/middlewares/middlewares.js'); //Importando MIDDLEWARES
const mongoose = require('mongoose'); //importando o módulo MONGOOSE por meio de require.

//CONEXÃO MONGOOSE
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}) //Utiliza o MONGOOSE para conectar no Banco de Dados.
        .then(() => { //Retornando a promessa e executando um função anonima de callback.
            console.log('Conectado ao banco de dados.'); //Informando no servidor que se conectou ao banco de dados.
            app.emit('ready'); //Emitindo sinal para o EXPRESS começar a rodar o servidor.
        }).catch(e => console.log(e)); //Logando erro caso o servidor não consiga se conectar ao banco de dados.

//CONFIGURAÇÃO DA SESSÃO
const sessionOptions = session({ //Configurações da sessão a ser salva.
    secret: 'XhY2sklfoXz@kssStUwxxSSklppSdk%$sldk@@3',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

//MÓDULOS UTILIZADOS PELO EXPRESS
app.use(helmet()); //Inicia o HELMET.
app.use(sessionOptions); //Inicia a sessão para ser salva.
app.use(flashMessage()); //Inicia o flash-messages.
app.use(csrf()); //Inicia o CSURF.


//EXPRESS SETTINGS
app.set('views', path.resolve(__dirname, 'src', 'views')); //Informa ao EXPRESS a pasta das páginas a serem renderizadas.
app.set('view engine', 'ejs'); //Informa ao EXPRESS qual engine vai renderizar as páginas.
app.use(express.urlencoded({extended: true})); //Informa ao EXPRESS que utilize a biblioteca 'QS' para parsing das requisições.
app.use(express.json()); //Permite a utilização de JSON's na aplicação.
app.use(express.static(path.resolve(__dirname, 'public'))); //Informa ao EXPRESS a pasta dos arquivos estáticos do site.
app.use(middleware.checkCsrfError); //Informa ao EXPRESS checar os erros de CSRF.
app.use(middleware.csrfMiddleware); //Informa ao EXPRESS atribuir um CSRF aos forms.
app.use(route); //Informa ao EXPRESS as rotas do servidor.

//EXPRESS START
app.on('ready', () => { //O EXPRESS recebe o sinal para iniciar o servidor.
    app.listen(3000, () => { //Inicia o servidor na porta '3000'.
        console.log('Acessar no http://localhost:3000/');
        console.log('Servidor executando na porta 3000');
    });
});