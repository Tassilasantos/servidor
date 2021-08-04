const dados = require("./data/ghibli.json") // -> definição de uma variavel para um dado especifico 
const express = require ("express") // -> chama o express
const server = express()            // -> define a variavel do express

server.listen(1313, ()=>{
    console.log("Inicializador!")
})
server.get("/", (request, response) =>{
    response.status(201).send({
        mensagem: "Continue!"
    })
})
server.get("/dados", (request, response)=>{

    response.status(200).send(dados) // definindo um comando para que um dado especifico seja mostrado(dados)
})

server.get("/dados/:id", (request, response)=>{
    const idRequest = request.params.id // recolhendo o parametro enviado na request

    let dadosFiltrados = dados.find(dado => dado.id == idRequest)
    console.log(dadosFiltrados)
    if(dadosFiltrados == undefined){
        response.status(404).send({
            mensagem: "ID inexistente!"
        })
    }else{
        response.status(201).send(dadosFiltrados) // mostra a respota no postman
    }

})
