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
nome.addEventListener('change', e=>{
   if(nome.value.trim() == ''){
      nome.style.backgroundColor = 'lightcoral'
      document.getElementById('save').style.backgroundColor = 'var(--cor-da-lista)'
   }else{
      nome.style.backgroundColor =  'var(--cor-da-lista)'
       document.getElementById('save').style.backgroundColor = 'lightgreen'   
   }
})
load.addEventListener('click', e=>{
   if(e.target.tagName == 'P'){
      lista.innerHTML = localStorage.getItem(e.target.innerText)
   }
})
load.addEventListener('dblclick', e=>{
   if(e.target.className == 'salves'){
      localStorage.removeItem(e.target.innerText)
      e.target.remove()
      localStorage.setItem('salvamentos', saves.innerHTML)
   }
})