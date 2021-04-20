/**funcao assincrona */

function calc (valor){
    return new Promise((resolve, reject) =>
        setTimeout(() =>{
            reject(5 * valor)
        }, 2000)
    )
}

calc(10)
/**passe por aqui se tudo ocorra bem */
.then((retorno) =>{
    console.log(`Valor de retorno: ${retorno}`)
})
/**passe por aqui caso der errado */
.catch((error) =>{
    console.log(`Valor de error: ${error}`)
})



