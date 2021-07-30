## Projeto de Módulo 4

### Descrição

O projeto foi feito utilizando Node.js, SQlite3 e Express, com o intuito de criar uma API Rest. Além disso, foi utilizado o design em MVC e DAO para a organização das pastas do código de acordo com suas funcionalidades. 

### Apps para instalar:
1. Git
2. Node.js

### Será necessário fazer o download dos programas, siga as instruções:

1. Para começar, faça um Git clone do projeto em um diretório de sua preferência, por meio do código:<br> `git clone https://github.com/Berserker24/Projeto-Modulo-4`

2. Depois de clonar o projeto, abra-o com seu editor de código, ou abra diretamente um terminal na pasta do projeto, e rode o comando `npm install` no terminal. ***Esse comando serve para instalar as dependências do projeto em seu computador***<br> 

3. Execute, ***Apenas uma vez*** o comando: <br>
`node .src/infra/create-and-populate`<br>
***Comando feito para criar e popular o Banco de dados*** 

4. Agora, rode o comando de inicialização do banco de dados: <br>
`npm run dev`

5. As rotas de acesso para os fornecedores são: <br>
GET: `http://localhost:3040/Fornecedores`<br> ***Serve para receber todo o banco de dados***<br>
<br>

GET: `http://localhost:3040/Fornecedores/:ID`<br> ***Serve para buscar um fornecedor especifico por meio do ID(Substituir o ID desejado no fim do caminho)*** <br>
<br>

POST: `http://localhost:3040/Fornecedores/NovoFuncionario/` <br> ***Serve para criar um novo fornecedor no banco de dados, utilizando o formato json no corpo da requisição, e contendo as chaves do objeto como: Nome, produto, email e cnpj***<br>
<br>

Exemplo de POST: <br>
`{<br>
    "NOME": "Mega Mate",<br>
    "PRODUTO": "Sobremesas",<br>
    "EMAIL": "MegaDocesCTT@gmail.com",<br>
    "CNPJ": "19384756171228"<br>
}`<br>


DELETE:`http://localhost:3040/Fornecedores/DeletaFuncionario/:ID`<br> ***Serve para deletar um fornecedor por meio do ID(Substituir o ID desejado no fim do caminho)***<br>
<br>

PUT:`http://localhost:3040/Fornecedores/:ID` <br>
 ***Serve para atualizar algum dado de um dos fornecedores por meio do ID e um corpo em json(O json deve conter apenas uma chave e um valor)***<br>
<br>

Exemplo de PUT:<br>
{<br>
	"NOME" : "Super"
}<br>

### Técnologias Utilizadas:
1. Node.js
2. NPM Express
3. Sqlite3