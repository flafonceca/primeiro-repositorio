//const aspasSimples="Olá, \nmundo"
//console.log(aspasSimples)

//onst aspasDuplas="Olá eu sou o \nJavascript. Eu sou melhor que o \nPython"
//console.log(aspasDuplas)

//const textoComCrase="Olá eu sou o Javascript. Eu sou melhor que o Pyhton"
//console.log(textoComCrase)

const texto="o Javascript foi criado alguns anos após o Pyhton. No entanto, o Javascript é mais bacana."
console.log(texto)
console.log(texto.toUpperCase())//maiuculo
console.log(texto.toLowerCase())//minusculo
console.log(texto.concat("A linguagem C é a mãe de todas as linguagens."))
//contatena

console.log(texto.substring(2, 12))//recorta uma parte
//case sensitive
console.log(texto.replace("Javascript", "Rust"))
console.log(texto.replaceAll("Javascript", "Kotlin"))
//g = procura globalmente
console.log(/Javascript/g, "PHP")
console.log(/Javascript/gI, "PHP")

const html = "<!DOCTYPE html>\n<html></html>"

console.log(html.startsWith("<!DOCTYPE html>"))
console.log(html.startsWith("batata"))

console.log(html.endsWith("</body"))

const mensagem="Olá, mundo"
console.log(mensagem)
console.log(mensagem.trim()) //remove espaços em excesso no inpicio e fim da rase

let senha="sonic" //informa quantidade de caracteres tem uma senha
console.log(senha.length)

//teste logico de senha
console.log(senha.length)
console.log(senha.length >= 8)  //é igual ou maior