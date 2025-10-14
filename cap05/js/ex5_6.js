const frm = document.querySelector("form")  // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {  // "escuta" evento submit do form
  e.preventDefault()  // evita envio do form
  const num = Number(frm.inNumero.value)  // obtém número informado

/*
  Código não tão efeciente (muitas repetições)  

  let numDivisores = 0  // declara e inicializa contador
  for(let i = 1; i <= num; i++) { // percorre todos os possíveis dividores de num
    if(num % i == 0) {  // verifica se i (1, 2, 3...) é divisor do num
      numDivisores++  // se é, incrementa contador
    }
  }
  if(numDivisores == 2) { // se possui apenas 2 divisores, é primo
    resp.innerText = `${num} É primo`
  } else {
    resp.innerText = `${num} Não é primo`
  }
 */ 

  // o valor 0 (zero) equivale a um valor lógico false e 1 (ou outro valor diferente de 0) equivale a um valor lógico true.

  let temDivisor = 0 // declara e inicializa a variável tipo flag

  for (let i = 2; i <= num / 2; i++) { // percorre os possíveis divisores do num
    if(num % i == 0) {  // se tem um divisor
      temDivisor = 1    // muda o flag
      break        // sai da repetição
    }
  }
  if(num > 1 && !temDivisor) {  // se num > 1 e não possui divisor
    resp.innerText = `${num} É primo`
  } else {
    resp.innerText = `${num} Não é primo`
  }
})