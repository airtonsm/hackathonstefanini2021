/**Realizando calculo salário */
function calculaSalario (salario, callback){   
    var impostos = {fgts : 0.15, inss : 0.11, valeAlimentacao : 0.05}
    valor = salario - (salario *(impostos.inss + impostos.fgts + impostos.valeAlimentacao))

    return setTimeout(() => {
        return callback(null, `Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${valor}.`)
    }, 5000)
}

function mostrarSalarioLiquido(err, retorno){
    if(err) throw err
    console.log(retorno)
}

console.log(calculaSalario(10000, mostrarSalarioLiquido))
