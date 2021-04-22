const express = require('express')
const app = express()
const hackathonRoutes = require('./routes/hackathonRoutes.js')

/**método do middleware - funcções executada entre requisicoes */
app.use(express.json())
/**chamando rota do arquivo hackathon.js */
app.use('/hackathon', hackathonRoutes)

// métodos de requisacao
app.get('/', (req, resp) => {
    resp.send('Projeto Hackathon Stefanini 123')
})

app.listen(3000, () => {
    console.log('Server is running...')
})
