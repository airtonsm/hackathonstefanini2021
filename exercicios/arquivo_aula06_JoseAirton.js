const {EventEmitter} = require('events')

const evento = new EventEmitter()

var alunos = [{nomeAluno : "", dataNascimento : ""}]

evento.on('eventos', (nome, data) =>{
    alunos.sort
    console.table(alunos)
})

evento.emit('eventos', 'airton', '18/05/1963')
evento.emit('eventos', 'Jorge', '18/05/1985')
evento.emit('eventos', 'Filipe', '18/05/1988')

