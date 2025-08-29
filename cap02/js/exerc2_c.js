/*
  c) Um supermercado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta
  de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades
  do produto. Após, apresente as mensagens indicando a promoção.
*/

// cria referência ao form e aos elementos h3 (onde serão exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outProduto")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
  frm.addEventListener("submit", (e) => {
    //obtém conteúdo (e converte em número)
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const terceiroProduto = preco * 0.50
    const pagamento =  preco * 2 + terceiroProduto


    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${pagamento.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${terceiroProduto.toFixed(2)}`


    e.preventDefault()  // evita envio do form
  })


