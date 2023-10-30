function verificaSeOChutePossuiUmValorValido(chute){
     const numero = +chute

     if (chuteForInvalido(numero)){
       elementoChute.innerHTML +='<div>Valor inválido</div>'
       return
     }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

if(numeroForMaiorQueOValorPermitido(numero)){
    elementoChute.innerHTML += `
  <div>Valor inválido: Fale um número entre ${menorValor} e 
  ${maiorValor}</div>
  `
  return
}

if (numero === mumeroSecreto){
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    `
} else if (numeroSecreto){
    elementoChute.innerHTML += `
    <div>o número secreto é menor <i class="fa-solid fa-down-long"></i></div>`

}else {
    elementoChute.innerHTML +=`
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`

}