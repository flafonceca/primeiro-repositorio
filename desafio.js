let precoProduto = parseFloat(prompt('Qual o preço do produto?'))

while (isNaN(precoProduto) == true) {
 alert(`O preço digitado é inválido. Por favor, informe o preço apenas com números sem caracteres especiais, letras ou acento`)
 precoProduto = parseFloat(prompt(`Qual o preço do produto?`))
}

const mensagem = 
`
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`

let metodoDePagamento = prompt(mensagem)
   
while (metodoDePagamento >3 || metodoDePagamento <=0) {
    alert(`Por favor, digite apenas 1, 2 ou 3`)
    metodoDePagamento = parseInt(prompt(mensagem))
   }

if (metodoDePagamento == 1 || metodoDePagamento == 2) {
   const precoFinal = precoProduto * 0.9
   alert(`O preço final do pagamento é ${precoFinal} reais`)
} 

else if (metodoDePagamento == 3) {
   
   if (parcelas == 1) {
    const precoFinal = precoProduto * 0.85
    alert(`O preço final do pagamento é ${precoFinal}`)
    } else if (parcelas == 2) {
    alert(`O preço final do pagamento é ${precoFinal}`)
    } else if (parcelas >= 3) {
        const precoFinal = precoProduto * 1.1 
    alert(`O preço final do pagamento é ${precoFinal}`)
    }
}