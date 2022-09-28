// criar um novo array
const nums = []

//criar um loop que execute 6x
for (let i = 1; i <= 6; i++) {
 const n = parseInt(prompt(`Digite o ${i}º número`))
 nums.push(n)
}

//separar os pares dos ímpares
const pares = []
const impares = []

for (let numero of nums) {
 
 if (numero % 2 == 0) {
   pares.push(numero)
 } else {
    impares.push(numero)
 }
}
alert(`Nós temos ${pares.length} valores pares: ${pares.join(', ')}`)
alert(`Nós temos ${pares.length} valores impares: ${pares.join(', ')}`)