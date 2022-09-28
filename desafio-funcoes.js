
/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax²** + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 RESULTADO = 4 e -3*/

const a = 1
const b = -1
const c = -12 
console.log(`este é o valor de A é: ${a}`)
console.log(`este é o valor de B é: ${b}`)
console.log(`este é o valor de C é: ${c}`)

let primeira= a** + b + c 
    console.log(primeira)

let delta=b**-4*a*c 
    console.log(delta) 
    
const raizDelta=Math.sqrt(delta);
    console.log(raizDelta) //-12

const x1=(-b + -12)/(2*a)
const x2=(-b - -12)/(2*a)
    console.log(x1,x2)

    





