var nome = document.getElementById('nome')
var load = document.getElementById('load')
var saves = document.getElementById('saves')

function carregar(){
   saves.innerHTML = localStorage.getItem('salvamentos')
   modo.checked = localStorage.getItem('modo')
   if(localStorage.getItem('modo') == 'true'){
      modo.checked = true
      tema()
   }else{
      modo.checked = false
      tema()
   }
}
function salvar(){
   localStorage.setItem('modo', document.getElementById('modo').checked)
   if(nome.value.trim() != '' && lista.innerText != ''){
      if(saves.innerText.search(nome.value) != -1){
         localStorage.setItem(nome.value, lista.innerHTML)
      }else{
         let Slista = document.createElement('p')
         document.body.appendChild(Slista)
         saves.appendChild(Slista)
         Slista.innerText = nome.value.trim()
         Slista.setAttribute('class', 'salves')
         localStorage.setItem(nome.value.trim(), lista.innerHTML)
         localStorage.setItem('salvamentos', saves.innerHTML)
         carregar()
      }   
   }
}
function apagarCache(){
   let dialog = document.getElementById('pop')
   pop.showModal()
}
function fechar(){
   pop.close()
}
function apagar(){
   localStorage.clear()
   carregar()
   pop.close()
}
nome.addEventListener('keydown', e=>{
   if(nome.value.trim() == ''){
      nome.value = null
      nome.style.backgroundColor = 'lightcoral'
      document.getElementById('save').style.backgroundColor = 'var(--cor-da-lista)'
   }else{
      document.getElementById('save').style.backgroundColor = 'lightgreen'
      document.getElementById('save').style.textShadow ='1px 1px 1px var(--cor-de-fundo)'
      document.getElementById('save').style.fontWeight = 'bolder'
      nome.style.backgroundColor =  'var(--cor-da-lista)'
   } 
})
load.addEventListener('click', e=>{
   if(e.target.tagName == 'P'){
      lista.innerHTML = localStorage.getItem(e.target.innerText)
      nome.value = e.target.innerText
   }
})
load.addEventListener('dblclick', e=>{
   if(e.target.className == 'salves'){
      localStorage.removeItem(e.target.innerText)
      e.target.remove()
      localStorage.setItem('salvamentos', saves.innerHTML)
   }
})