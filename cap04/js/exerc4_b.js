 /*
  b) Elaborar um programa que leia a velocidade permitida em uma estrada e a valocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa". Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade, exiba "Multa Grave".
 */

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault()    // evita envio do form

const velPermitida = Number(document.getElementById('inVelPermitida').value)
const velCondutor = Number(document.getElementById('inVelCondutor').value)

if(velCondutor <= velPermitida) {
  resp.innerText = "Sem Multa"
} else if (velCondutor <= velPermitida + (velPermitida * 0.2)) {
   resp.innerText = 'Multa Leve'
  } else {
    resp.innerText = "Multa Grave"
  }
})

