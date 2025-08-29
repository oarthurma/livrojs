/*
b) Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).
*/
const prompt = require("prompt-sync")()    // adiciona o pacote ao programa

// Entrada
const peso = Number(prompt("Peso (em kg): "))
const consumo = Number(prompt("Consumo (por dia): "))

// Processamento
const pesoEmGramas = peso * 1000 // convertando kg em gramas
const dias = Math.floor(pesoEmGramas / consumo) // calculando os dias
const sobra = pesoEmGramas - (dias * consumo)

// Saída
console.log(`A ração irá durar ${dias} dias.`)
console.log(`Vai sobrar ${sobra} gramas de ração.`)