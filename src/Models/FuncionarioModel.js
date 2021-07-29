const FornecedoresDAO = require("../DAO/ForneceDAO");

class Fornecedor{
    constructor(nome, produto, email, cnpj)
    {
        if(typeof nome != 'string' || nome.length < 2)
        {
            throw new Error("Nome está no formato incorreto")
        }
        else
        {
            this.nome = nome;
        }
        
        if(typeof produto != 'string' || produto.length < 2)
        {
            throw new Error("produto está no formato incorreto")
        }
        else
        {
            this.produto = produto;
        }
        
        if(typeof email != 'string' || email.length < 2 || email.includes('@') == false )
        {
            throw new Error("Email está no formato incorreto")
        }
        else
        {
            this.email = email;
        }

        if(typeof cnpj != 'string' || (cnpj.length == 14) == false)
        {
            throw new Error("CNPJ está no formato incorreto")
        }
        else
        {
            this.cnpj = cnpj;
        }
    }
}

module.exports = Fornecedor;