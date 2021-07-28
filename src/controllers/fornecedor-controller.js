const ForneceDAO = require('../DAO/ForneceDAO');
const ModelFornecedor = require('../Models/FuncionarioModel')

module.exports = (app, db) => {
    const BancoFornecedores = new ForneceDAO(db)

    app.get('/Fornecedores',async (req, res)=>{
        try{
            const resposta = await BancoFornecedores.TodosFornecedores();
            res.send(resposta)
        }
        catch(err)
        {
            res.send(err)
        }
    })

    app.get('/Fornecedores/:ID', async (req, res) =>{
        try{
            const id = req.params.ID;
            const resposta = await BancoFornecedores.BuscaFornecedor(id)
            if(resposta == null)
            {
                res.send("O parametro solicitado não existe no banco de dados")
            }
            else{
                res.send(resposta)
            }
            
        }
        catch(err)
        {
            res.send(err)
        }
    })

    app.post('/Fornecedores', async (req,res)=>{
        try{
            const corpo = req.body;
            let novoFornecedor = new ModelFornecedor(corpo.NOME, corpo.PRODUTO, corpo.EMAIL, corpo.CNPJ);
            const resposta = await BancoFornecedores.CriaFornecedor(novoFornecedor)
            res.send(`Usuario criado com sucesso! ${resposta}`)
        }
        catch(err)
        {
            res.send(`Erro ao criar um novo usuario. ${err}`)
        }
    })  

    app.delete('/Fornecedores/:ID', async(req,res)=>{
        try
        {
            const id = req.params.ID;
            const resposta = BancoFornecedores.DeletaFornecedor(id);
            res.send(`Usuario deletado com sucesso!`)  
        }
        catch(err)
        {   
            res.send(`Erro ao deletar o fornecedor!`)
        }
    })


    app.put()
}