const express = require('express')
const app = express()

// métodos de requisacao
app.get('/', (req, resp) => {
    resp.send('Projeto Hackathon Stefanini 123')
})

app.get('/hackathon/:identificador', (req, resp) => {
    resp.send(`Dados do Hackathon. identificador: ${req.params.identificador}`)
})

app.listen(3000, () => {
    console.log('Server is running...')
})
