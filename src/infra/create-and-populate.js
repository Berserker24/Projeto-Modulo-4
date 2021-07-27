const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "PRODUTO" varchar(64),
    "EMAIL" varchar(64),
    "CNPJ" varchar(64)
  );`;


const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES (ID, NOME, PRODUTO, EMAIL, CNPJ)
VALUES 
    (1, 'Super Beef', 'Carne', 'superBeefCTT@gmail.com', '29384756102938'),
    (2, 'Fazenda do Zé', 'Complementos', 'ZéCTT@gmail.com', '19283940182937'),
    (3, 'Coca Cola', 'Bebidas', 'CocaCTT@gmail.com', 29384715609271)
    `

function criaTabelaFornecedores() {
    db.run(FORNECEDORES_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de fornecedores");
    });
}
    
function populaTabelaFornecedores() {
    db.run(ADD_FORNECEDORES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de fornecedores");
    });
}

db.serialize( ()=> {
    criaTabelaFornecedores();
    populaTabelaFornecedores();  
});