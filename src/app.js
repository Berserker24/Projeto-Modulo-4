//Imports
const express = require('express');

//config
const app = express();
const port = 3040;

//Import Models DB
const db = require('./infra/sqlite-db');

//Rotas
const rotaFornecedores = require('./controllers/fornecedor-controller')


rotaFornecedores(app,db)



app.listen(port,()=>{
    console.log('Servidor rodando na porta: '+ port)
})