//ALTURA
const listaAltura = [15] //guardar os dados na lista
for (let i = 1; i <= 15; i++) { 
    listaAltura.push(parseFloat(prompt(`Digite a altura da ${i}º pessoa`)))
     //guardar localmente 
}

   let menor = Number.MAX_VALUE
   let maior = 0

   for (let listaAltura of altura) {
    if (altura<min) {
        min=menor
        
      } if (altura>max) {
         max=maior
      }
}

   alert(`Essa é a menor altura` + {min})
   alert(`Essa é a maior altura` + {max})
