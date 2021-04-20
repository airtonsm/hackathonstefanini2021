
/**importando módulo http */
const {createServer} = require('http')
const port = 9876 /**port default */
const url = `localhost:${port}`

const server = createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'})
    resp.write('<h1>Jose Airton</h1></br>'
    +'<h1>Melhorar meus conhecimentos para futuramente ajudar minha equipe de trabalho a criar solucoes</h1>')
    return resp.end();
})

server.listen(port ,()=>{
    console.log(`'Server: ${url} is running'`)
})