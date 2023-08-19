var nome_lista = document.getElementById('nome')
var load = document.getElementById('load')
var saves = document.getElementById('saves')

nome_lista.addEventListener('keydown', e=>{
   if(nome_lista.value.trim() == ''){
      nome_lista.style.backgroundColor = 'lightcoral'
      document.getElementById('save').style.backgroundColor = 'var(--cor-da-lista)'
   }else{
      nome_lista.style.backgroundColor =  'var(--cor-da-lista)'
       document.getElementById('save').style.backgroundColor = 'lightgreen'   
   }
})
function salvar(){
   if(localStorage.length < 11 && nome_lista.value.trim() != '' && lista.innerText != ''){
      window.alert('Salvo!')   
      let save = document.createElement('p')
      document.body.appendChild(save)
      saves.appendChild(save)

      localStorage.setItem(nome_lista.value.trim(), lista.innerHTML)
      save.innerText = localStorage.key(0)
      localStorage.setItem('salvamentos', saves.innerHTML)
      nome_lista.value = ''
   }
   if(lista.innerText == ''){
      alert('lista vazia')
   }
   if(nome_lista.innerText.trim() == ''){
      alert('De um nome para sua lista')
   }
}
load.addEventListener('click', e=>{
   if(e.target.tagName == 'P'){
      lista.innerHTML = localStorage.getItem(e.target.innerText)
   }
load.addEventListener('dblclick', e=>{
   if(e.target.tagName = 'P'){
      localStorage.removeItem(e.target.innerText)
      e.target.remove()
   }
})
})
function carregar(){
   saves.innerHTML = localStorage.getItem('salvamentos')
}