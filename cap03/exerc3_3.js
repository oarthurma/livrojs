/*
  a) Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênio a que o funcionário tem direito e o salário final. 
*/
const prompt = require("prompt-sync")()  // adiciona o pactoe ao programa

// entrada
const salario = Number(prompt("Salário: "))
const tempo = Number(prompt("Tempo de empresa: "))

// processamento
const quadrienios = Math.floor(tempo / 4)
const salarioFinal = salario + (salario * (quadrienios / 100))

// saída
console.log(`Número de quadriênios: ${quadrienios}`)
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`)