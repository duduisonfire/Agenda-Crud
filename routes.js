const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/home.js');
const loginController = require('./src/controllers/login.js');
const errorController = require('./src/controllers/404.js');

//Rotas da Home
route.get('/', homeController.index);

//Rotas de Login
route.get('/login/', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);


//Rotas de ERRO 404
route.get('/404/', errorController.index);

//Exportando as rotas
module.exports = route;