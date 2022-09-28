let end ={
    rua: `Rua`,
    numero: 456,
    estado: `SP`,
    complemento: `Sem complemento`,
    cep: 12345-00
}

let pessoa ={
    nome: `Joana`,
    idade: 23,
    cpf: `123.123.123-12`,
    altura: 156,
    endereco: {...end},
    solteiro: true,
    habilidades: [`React`, `Java`, `JavaScript`, `Goland`, `Rust`],
    cumprimentar() {

    console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
}
}

//console.log(end)
//console.log(pessoa.endereco.estado)
/*pessoa.cumprimentar()
pessoa.nome=`Pablo Escobar`
pessoa.cumprimentar()
pessoa.habilidades.push(`Angular`)
pessoa.log(pessoa.habilidades)
console.log(pessoa["cpf"])*/

console.log(end.rua)
console.log(pessoa.endereco.rua)

pessoa.endereco.rua=`Rua Secundária`

console.log(pessoa.endereco.rua)
console.log(end.rua)


