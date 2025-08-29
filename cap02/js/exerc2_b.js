// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const valor = Number(frm.inValor.value) // obtém conteúdo dos campos
  const tempo = Number(frm.inTempo.value)
  console.log(valor)
  console.log(tempo)

  const valorTotal = Math.ceil(tempo / 15) * valor
  resp.innerText = `Valor a Pagar R$: ${valorTotal.toFixed(2)}`
  
  e.preventDefault() // evita envio do form

});