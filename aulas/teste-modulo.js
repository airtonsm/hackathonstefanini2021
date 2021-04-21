console.log('Este é nosso teste modulo')

const funcao1 = () => {
    console.log('funcao1')
}

const funcao2 = () => {
    console.log('funcao2')
}

const variavelTeste = 'Variável teste 002'

/**necessário exportar para ser visualizado em outro codigo */
module.exports = {funcao1, variavelTeste}

