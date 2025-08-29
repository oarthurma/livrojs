const prompt = require("prompt-sync")()  // adiciona pacote ao programa
const salario = Number(prompt("Salário: "))        // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Math.floor(tempo / 4)          // calcula quadriênios
const acrescimo = salario * quadrienios / 100
console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final: R$ ${(salario+acrescimo).toFixed(2)}`)