/*
  b) Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. 
  Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha, conforme exemplo de execução do programa.
*/

const prompt = require("prompt-sync")() 
const produto = prompt("Produto: ")
const numEtiquetas = promtp("Nº de Etiquestas: ")

for (let i = 1; i <= 