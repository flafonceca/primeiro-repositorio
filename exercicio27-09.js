
let produtos = []

   let produto={
   nome: " ",
   marca: " ",
   foto: " ",
   preco: 0,
   estoque: 0,
   }

for (i = 0; i <=15;i++) { 
    produtos.nome=(prompt(`Insira o nome do ${i}º produto:`))
    produtos.marca=(prompt(`Insira a marca do ${i}º produto:`))
    produtos.foto=(prompt(`Insira o link do ${i}º produto:`))
    produtos.preco=(parseFloat(prompt(`Insira o preço do ${i}º produto:`)))
    produtos.estoque=prompt((`Insira a quantidade do ${i}º produto:`))
    produtos.push(produto);

    document.write (`Nome: ${produtos[i].nome} Marca: ${produtos[i].marca} <br> Foto: <img src="${produtos[i].foto}"> <br> Preço: R$ ${produtos[i].preco} <br> Quantidade no estoque: ${produtos[i].estoque} <br>`)

}


