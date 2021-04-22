const express = require('express')
const hackathonRoutes = express.Router()


hackathonRoutes.get('/:identificador', (req, resp) => {
    resp.send(`Dados do Hackathon. identificador: ${req.params.identificador}`)
})

hackathonRoutes.post('', (req, resp) => {
    let body = req.body;
    resp.send(`Informações do usuário.\nNome : ${body.nome} \nTelefone: ${body.telefone}`)
})

hackathonRoutes.put('/:identificador', (req, resp) => {
    resp.send(`Dados do Hackathon - metedo PUT. identificador: ${req.params.identificador}`)
})

hackathonRoutes.patch('/:identificador', (req, resp) => {
    resp.send(`Dados do Hackathon - metedo PATCH. identificador: ${req.params.identificador}`)
})

hackathonRoutes.delete('/:identificador', (req, resp) => {
    resp.send(`Dados do Hackathon - metedo DELETE. identificador: ${req.params.identificador}`)
})

module.exports = hackathonRoutes
