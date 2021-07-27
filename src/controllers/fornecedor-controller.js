const ForneceDAO = require('../DAO/ForneceDAO');

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
}