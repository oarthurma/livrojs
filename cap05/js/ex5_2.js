const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form
  const numero = Number(frm.inNumero.value) // obtém número informado
  let resposta = `Entre ${numero} e 1: `  // String para montar a resposta
  
/*
  for(let i = numero; i > 0; i = i - 1) {  // cria um for decrescente
    resposta = resposta + i + ", "   // resposta acumula números (e vírgulas)
  }

  Nesse caso uma vírgula ficou “sobrando” no final da listagem, o que faz com que a resposta do programa não fique muito bonita.
*/

/*
 
  for(let i = numero; i > 0; i--) {
    if(i == 1) {
      resposta = resposta + i + "." // ou resposta = `${resposta}${i}.`
    }
    else {
      resposta = resposta + i + ", " // ou resposta = ´${resposta}${i},´
    }
  }

  Para esse exercício, tal solução não é a recomendada, pois o número de comparações realizadas pelo programa é muito alto, e a solução, pouco eficiente. Imagine se o usuário digitar o número 100: o programa vai realizar 100 comparações, sendo que, em apenas uma delas, o if é verdadeiro.  
*/

for (let i = numero; i > 1; i--) {
  resposta = resposta + 1 + ", "
}
  resp.innerText = resposta + "1."     // exibe a resposta

  // Isolar o último número é uma alternativa mais adequada para esse programa. Ou seja, o comando for repete até o número 2 e fora da repetição é acrescentado o último número: “1.”.

})