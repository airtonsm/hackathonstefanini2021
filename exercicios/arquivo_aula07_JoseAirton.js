
/**Api console */

const { stringify } = require("uuid");

/**Imprime messagem de error */
var messagemError = 'Mensagem de ERROR enviado por José Airton'
console.error(messagemError)


function Profissoes(profissao){
    this.profissao = profissao;
}

var p01 = {Profissoes:'Analísta'}
var p02 = {Profissoes:'Gari'}
var p03 = {Profissoes:'Engenheiro de Software'}
var p04 = {Profissoes:'Mecânico'}

console.table([p01, p02, p03, p04])

var pessoa =  [{ nome : 'José Airton', endereco : 'Cond. M.Darmas 1, Planaltina-DF', telefone : '(61) 99874-7525',    
dataNascimento : '28/05/1993', CEP : '73.401-131', municipio : 'Planaltina',  estado : 'Distrito Federal'},
{ nome : 'Douglas Jorge', endereco : 'Bairro Aldeota, Fortaleza-CE', telefone : '(61) 98745-98745',    
dataNascimento : '10/09/1985', CEP : '61.113.48', municipio : 'Fortaleza',  estado : 'Ceará'}]


console.table(pessoa)