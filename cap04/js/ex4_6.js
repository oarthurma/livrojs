/*
  c) Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50, 10 necessárias para pagar o saque.
*/

const frm = document.querySelector("form") // obtém elementos da página  
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => { // "escuta" evento submit do form
  e.preventDefault()        //evita envio do form
  const saque = Number(frm.inSaque.value) // obtém valor do saque
  if(saque % 10 != 0) {     // se saque não é múltiplo de 10
    alert("Valor inválido para notas disponíveis(R$ 10, 50, 100")
    frm.inSaque.focus()
    return
  } 
  const notasCem = Math.floor(saque / 100) // calcula notas de 100
  let resto = saque % 100        // quanto sobra para pagar
  const notasCinqueta = Math.floor(resto / 50) // calcula notas de 50
  resto = resto % 50             // quanto ainda sobre
  const notasDez = Math.floor(resto / 10) // calcula notas de 10
  if(notasCem > 0) {          // exibe as notas se houver
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if(notasCinqueta > 0) {
    resp2.innerText = `Notas de R$ 50`
  }
  if(notasDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notasDez}`
  }
})