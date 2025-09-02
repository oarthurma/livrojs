/*
  a) Elaborar um programa qeu leia um número. Informe se ele é par ou ímpar. Faça com o if... else... tradicional e, após, tente criar a condição com o operador ternário. 
*/
const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()  // evita envio do form
  const num = Number(frm.inNum.value) // obtém número digitado
  
  
  // if(num % 2 === 0) {
  //   resultado = "par"
  // }
  // else {
  //   resultado = "ímpar"
  // }  

  //ternário
  num % 2 === 0 ? resultado = 'par' : resultado = 'impar'

  resp.innerText = `${num} é ${resultado}`
})