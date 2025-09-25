/*
  c) Elaborar um programa para simular um parquimetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo no local e o troco (se existir). Se o valor for inferir aos tempo mínimo, exiba a mensagem: "Valor Infuficiente". Considerar os seguintes valors/tempos:
    - R$ 1,00 → 30 minutos
    - R$ 1,75 → 60 minutos
    - R$ 3,00 → 120 minutos
*/

//cria referência ao form e elemento onde eserá exibida a resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

// "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault()      // evita envio do form
  const valor = Number(frm.inValor.value)
  let tempo, troco
  if(valor < 1) {
    alert("Valor insuficiente")
  } else if (valor == 1 || valor < 1.75) {
    tempo = 30
    troco = valor - 1
  } else if (valor < 3) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 120
    troco = valor - 3.00
  }
  

  resp1.innerText = `Tempo: ${tempo} min`
  resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
})
