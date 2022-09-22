const litros = parseFloat(prompt('Qual a quantidade em litros?'))
const mensagem = `
Informe o tipo de combustível:
Digite A para alcool
Digite G para gasolina
`
const combustivelTipo = prompt(mensagem)

console.log(litros)
console.log(combustivelTipo)

let preco
 
if (combustivelTipo == `A`){
    if (litros<=25){
    let preco=litros*1.90
let desconto=preco+preco*0.02

alert(`o valor e: 
R$${preco} com desconte de:
R$${desconto}`)

    }else if(litros>=25){
        preco=litros*1.90
        let desconto=preco-preco*0.04
        alert(`o valor e: 
R$${preco}`)
    }

    }else if(combustivelTipo==`G`){
    if(litros<=25){
        preco=litros*2.70
        let desconto=preco-preco*0.03
        alert(`o valor e: 
R$${preco}`)

    }else if(litros>=25){
        preco=litros*2.70
        let desconto=preco-preco*0.05
        alert(`o valor e: 
R$${preco} `)
    } 
}