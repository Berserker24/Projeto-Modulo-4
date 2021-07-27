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
}

module.exports = FornecedoresDAO;