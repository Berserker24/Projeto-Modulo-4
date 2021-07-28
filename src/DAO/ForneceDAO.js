class FornecedoresDAO{
    constructor(db){
        this.db = db;
    }

    TodosFornecedores(){
        return new Promise((resolve, reject) =>{
            this.db.all("Select * from FORNECEDORES", (err,rows)=>{
                if(err){
                    reject(`Erro ao acessar o BD.${err}`)
                }
                else{
                    resolve(rows)
                }
            })
        })
    }

    BuscaFornecedor(id){
        return new Promise((resolve, reject) =>{
            this.db.get("SELECT * FROM FORNECEDORES WHERE ID = (?)", (id),(err, rows)=>{
                if(err){
                    reject(`Erro ao acessar o BD. ${err}`)
                }
                else
                {
                    resolve(rows)
                }
            })
        })
    }

    CriaFornecedor(dados){
        return new Promise((resolve, reject) =>{
            this.db.run(`INSERT INTO FORNECEDORES VALUES (?,?,?,?,?)`, [null,dados.nome, dados.produto, dados.email, dados.cnpj], (err)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            })
        })
    }

    DeletaFornecedor(id){
        return new Promise((resolve, reject) =>{
            this.db.run(`DELETE FROM FORNECEDORES WHERE ID = (?)`, id, (err)=>{
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve()
                }
            })
        })
    }
}

module.exports = FornecedoresDAO;