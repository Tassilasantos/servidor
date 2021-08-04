const dados = require("./data/ghibli.json") 
const express = require ("express")
const server = express()            

server.listen(1313, ()=>{
    console.log("Inicializador!")
})
server.get("/", (request, response) =>{
    response.status(201).send({
        mensagem: "Continue!"
    })
})
server.get("/dados", (request, response)=>{

    response.status(200).send(dados) 
})

server.get("/dados/:id", (request, response)=>{
    const idRequest = request.params.id 

    let dadosFiltrados = dados.find(dado => dado.id == idRequest)
    console.log(dadosFiltrados)
    if(dadosFiltrados == undefined){
        response.status(404).send({
            mensagem: "ID inexistente!"
        })
    }else{
        response.status(201).send(dadosFiltrados) 
    }

})
