/**funcao assincrona */
const calc = (valor, callback) => {

    return setTimeout(() =>{

        return callback(null,  5 * valor)

    }, 2000)
}

/**funcao de callback */
function mostrarValor(err, retorno){
    if(err) throw err
    console.log(retorno)
}

calc(20, mostrarValor)


