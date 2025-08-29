// O exemplo do Capítulo 2 que vamos adaptar para rodar a partir do Node.js é o programa ex2_3.js.  

const prompt = require("prompt-sync")()   // adiciona o pacote ao programa
const veiculo = prompt("Veículo:")    // lê os dados de entrada
const preco = Number(prompt("Preço R$:"))
const entrada = preco * 0.50    // calcula valor da entrada
const parcela = (preco * 0.50)/12  // ...e das parcelas 
console.log(`Promoção: ${veiculo}`)      // exibe as respostas
console.log(`Entrada de R$: ${entrada}`)
console.log(`+ 12x de R$ ${parcela.toFixed(2)}`)