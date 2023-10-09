const elementoChute = document.getElementById('chute')
window.SeepchRecognition = window.SeepchRecognition || webkitSpeechRecognition;

const recognition = new SeepchRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

 function onSpeak(e){
    console.log(e.results[0][0].transcript)
 } 

 function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
 }

 function exibeChuteNaTela(chute){

 }