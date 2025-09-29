/* 
  d) Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes).
*/

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const ladoA = Number(frm.inLadoA.value)
  const ladoB = Number(frm.inLadoB.value)
  const ladoC = Number(frm.inLadoC.value)


  let lados
  let tipo
  let triangulo
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    lados = "Lados NÃO podem formar um triângulo"
    triangulo = false
    frm.inladoA.focus()
    return
  } else {  
    lados = "Lados podem formar um triângulo"
    triangulo = true

    if(ladoA === ladoB && ladoA === ladoC) {
      tipo = "Equilátero"
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
      tipo = "Escaleno"
    } else {
      tipo = "Isósceles"
    }
  } 

  resp1.innerText = lados
  if(triangulo) {
    resp2.innerText = `Tipo: ${tipo}`
  }
  
})