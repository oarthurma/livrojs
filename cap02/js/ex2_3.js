/* 
Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.

Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição: Uma introdução à programação de computadores com exemplos e exercícios para iniciantes (Portuguese Edition) (pp. 74-75). Novatec Editora. Edição do Kindle. 
*/

// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value // obtém o conteúdo dos campos
  const preco = Number(frm.inPreco.value)

  const entrada = preco * 0.50 // calcula valor da entrada
  const parcela = (preco * 0.50) / 12 // ... e das parcelas
  
  resp1.innerText = `Promoção: ${veiculo}` // exibe as respostas
  resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
  resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`

  e.preventDefault() // evita envio do form
})