/*
  b) Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz
  seja exata (quadrados perfeitos), informá-la, caso contrário, informe: 'Não há raiz exata para..'.
*/

const frm = document.querySelector("form")  // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()      // evita envio do form

  const numero = Number(frm.inNumero.value) // obtém número digitado no form
  const raiz = Math.sqrt(numero) // calcula raiz quadrada do número
  if(raiz % 1 == 0) {  // ou if (raiz % 1 == 0) {...}
    resp.innerText = `Raiz: ${raiz}`  // ...mostra a raiz
  } else {            // senão,
    resp.innerText = `Não há raiz exata para ${numero}`  // ...mostra mensagem
  }
})