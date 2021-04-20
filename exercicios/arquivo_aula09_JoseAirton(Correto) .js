/**funcao assincrona */
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
            }, 2000)
        })
}

valorSalario(10000)

/**Se validado */
.then((retorno) =>{
    console.log(retorno)
})
/**Se invalidado */
.catch((error)=>{
    console.log(`Error: Adicione um valor válido. Valor inserido : ${valor}`)
})
