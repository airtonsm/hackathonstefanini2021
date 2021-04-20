const {EventEmitter} = require ('cadastroAlunos')

/** criando um evento */
const cadastro = new EventEmitter()

var aluno = {nome, data}

/* ouvindo um evento  */
cadastro.on('Aluno',( nome, data)=>{

    console.log()

})


/** publicando um evento */
cadastro.emit('Aluno', 'Stefanni Lopes', '02/01/1995')
cadastro.emit('Aluno 02', 'Bob Marlei', '26/04/1998')


console.table(cadastro)