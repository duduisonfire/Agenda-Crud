const express = require('express');
const route = express.Router();
const homeController = require('./controllers/home.js');

//Rotas da Home
route.get('/', homeController.homepage);

//Exportando as rotas
module.exports = route;