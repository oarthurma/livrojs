/* 
Exemplo 4.9 - Programa Inverte Centena

  c) Elaborar um programa que leia um número - que deve ser um centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba mensagem.
*/

const prompt = require("prompt-sync")() // adiciona pacote prompt-sync
const numero = Number(prompt("Número (centena): ")) // lê o número
if(numero < 100 || numero >= 1000) {
  console.log("Erro... deve ser uma centena")
  return
}
const num1 = Math.floor(numero / 100) // obtém o 1º número
const sobra = numero % 100 // o que sobra (dezena)
const num2 = Math.floor(sobra/10) // obtém 2º número
const num3 = sobra % 10   // obtém 3º número
console.log(`Invertido: ${num3}${num2}${num1}`) // exibe o número invertido