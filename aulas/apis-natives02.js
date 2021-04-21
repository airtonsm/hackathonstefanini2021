const {EventEmitter} = require('events')

/**criando um evento */
const evento = new EventEmitter()



/**OUVINDO UM EVENTO */
evento.on('teste', (user, msg) =>{

    console.log(`Usuario: ${user} possui uma MGS: ${msg}`)
})

/**Publicando um evento */
evento.emit('teste', 'Airton Jose', 'Futuro Analista da Stefanini')
evento.emit('teste', 'Jose Adriano', 'Aprendendo a desenvolver')
