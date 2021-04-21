
function valorSalario(salario){

    var impostos = {fgts : 0.15, inss : 0.11, valeAlimentacao : 0.05}
    valor = salario - ((salario * impostos.inss) + (salario * impostos.fgts) + (salario * impostos.valeAlimentacao))
    return new Promise((valid, invalid) => {
        setTimeout(() =>{
            if(salario != null){
           valid(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${valor}.`)  
            }else{
                invalid()
            }  
        }, 5000)
    })
}

async function main(){
    try{
    let retorno = await valorSalario(10000)
    console.log(`Retorno validado: ${retorno}`)
    }catch(error){
        console.log(`Retorno invalidado: ${error}`)
    }
}

const textoTela = 'Esse eh o arquivo 10 importado no arquivo 11.'

module.exports = {textoTela, main}
