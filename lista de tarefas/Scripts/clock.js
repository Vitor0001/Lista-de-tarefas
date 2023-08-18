let Phora = document.getElementById('hora')
let Pminuto = document.getElementById('minuto')
let Psegundo = document.getElementById('segundo')

let comecar = document.getElementById('comecar')
let alarme = document.getElementById('alarme')
comecar.addEventListener('click', count)
alarme.loop = true

Phora.addEventListener('change', esquerda)
Pminuto.addEventListener('change', esquerda)
Psegundo.addEventListener('change', esquerda)

function esquerda(){
   Phora.value = Phora.value.padStart(2, '0')
   Pminuto.value = Pminuto.value.padStart(2, '0')
   Psegundo.value = Psegundo.value.padStart(2, '0')
}

var ativo = false
function count(){
   if(ativo == false){
      ativo = true
      comecar.innerText = 'Parar'
      var intervalo = setInterval(segundo, 1000)
   }else{
      ativo = false
      comecar.innerText = 'Começar'
      alarme.pause()
      clearInterval(intervalo)
   }
}
function segundo(){
   if(Psegundo.value > 0 || Pminuto > 0){
      Psegundo.value = Psegundo.value -1
      esquerda()
   }
   if(Pminuto.value >= 1 && Psegundo.value == 0){
      console.log('foi')
      Psegundo.value = 59
      Pminuto.value = Pminuto.value -1
      esquerda()
   }
   if(Phora.value >=1 && Pminuto.value == 0){
      Phora.value = Phora.value -1 
      Pminuto.value = 60
      esquerda()
   }
   if(Phora.value == 0 && Pminuto.value == 0 && Psegundo.value == 0){
      alarme.play()
   }
}
