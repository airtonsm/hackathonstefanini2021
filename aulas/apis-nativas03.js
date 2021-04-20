/**Console */

console.log('Hackaton Stefanini aprendendo nodeJS')
console.log('**********************************')

console.error(new Error('Messagem de erro'))
console.log('**********************************')

const timesCariocas = ['Vascaindo', 'Florminense', 'Bostafogo', 'Corinthians']


console.table(timesCariocas)
const objetoTest = {
    nome: 'Airton',
    empresa: 'Stafanini Group',
    curso: 'NodeJS'

}

console.table(objetoTest)
console.log('********************')

console.count('contador01')
console.count('contador01')
console.count('contador01')
console.count('contador02')
console.countReset('contador01');
console.count('contador01')
console.log('**********************')
/** INICIO CONTADOR */
console.time('tempo')

for (let index = 0; index < 100; index++) {
    console.log('-')
    
}

/** INICIO CONTADOR */
console.timeEnd('tempo')

console.assert(true, 'Assert is true')
console.assert(false, 'Assert is false')

//console.clear()

