var p111 = {
    fullname: 'José Airton',
    age: 20,
    gender: 'M',
    address: {
      city: 'Recife',
      state: 'PE',
      postalCode: '52050-500'
    }
  }


var p111Mapeada = {
  nome: p111.fullname.split(" ")[0],
  sobrenome: p111.fullname.split(" ")[1],
  idade: p111.age,
  gender: p111.gender,
  cidade: p111.address.city,
  estado: p111.address.state,
  cep: p111.address.postalCode
}

console.log(p111Mapeada)