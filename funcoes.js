function cumprimentar (mensagem, repetir=1) {
    for (let i = 1; i<= repetir; i++) {
   //document.write(`<p>${mensagem}</p>`)
      alert(mensagem)
    }
}

function soma(num, num2) {
    //console.log(num+num2)
    let result = num + num2
    return result
}

function maiorValor(a,b) {
    if(a>b) {
    return a} else {
        return b
    }
    }// --- única forma de usar dois return's 

let resultado = soma(5,9)
console.log(`O valor da variável resultado é de ${resultado}`)

const num1 = parseInt(prompt(`Informe o primeiro número`))
const num2 = parseInt(prompt(`Informe o segundo número`))
alert(`O maior número entre esses e ${maiorValor(num1, num2)}`)

/*cumprimentar("Olá, mundo!", 3)
cumprimentar("Eu gosto do Javascript", 2)
cumprimentar("Javascript>"+"C#", 2)*/
