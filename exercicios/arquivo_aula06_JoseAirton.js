const {EventEmitter} = require('events')

const evento = new EventEmitter()

const alunos = [{nome : 'Airton', 
                dataNascimento : '18/05/1993'}]


evento.on('eventos', (nome, dataNascimento) =>{

    alunos.push({Nome: nome,datadeNascimento : dataNascimento})

    console.table(alunos)
})

evento.emit('eventos', 'Airton', '18/09/2001')
evento.emit('eventos', 'Vitor', '18/09/1993')
