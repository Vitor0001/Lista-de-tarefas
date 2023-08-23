var lista = document.getElementById('lista')
var tarefa = document.getElementById('Add')

count = 5

let criar = tarefa.addEventListener('keydown', (tecla=>{
   if(tecla.key == 'Enter'){
      count ++
      let li = document.createElement('li')
      let texto = document.createElement('span')
      texto.setAttribute('class', 'texto')
      texto.innerText = tarefa.value
      li.setAttribute('id', count)
      tarefa.value = ''

      let spanDelet = document.createElement('span')
      spanDelet.setAttribute('class', 'remove')
      spanDelet.innerHTML = '&#x1F5D9;'

      let spanEdit = document.createElement('span')
      spanEdit.setAttribute('class', 'edit')
      spanEdit.innerHTML ='&#x1F589;'
      
      li.appendChild(texto)
      li.appendChild(spanDelet)
      li.appendChild(spanEdit)
      lista.appendChild(li)
      
      console.log('O ID atual é '+count+'.')
   }
}))
let Edicao = lista.addEventListener('click',(e=>{
   if(e.target.className == 'remove'){
      console.log('Apagou ' + e.target.parentElement.innerText)
      e.target.parentElement.remove()
      count --
      console.log('O Id atual é '+count+'.')
   }
   if(e.target.className == 'edit'){
      e.target.parentElement.children.item(0).innerText = tarefa.value 
      console.log('Tarefa editada')
   }
}))
lista.addEventListener('dblclick',(e=>{
   if(e.target.className == 'texto'){
      let feito = document.createElement('del')
      //console.log(e.target.firstChild)
      e.target.innerHTML +='<del>'+e.target.innerText+'</del>'
      e.target.firstChild.remove()
   }
}))
let modo = document.getElementById('modo')
modo.addEventListener('click' , tema)
function tema(){
   if(modo.checked == true){
      document.body.style.setProperty('--cor-de-fundo', '#1f1f1f')
      document.body.style.setProperty('--cor-da-fonte', 'white')
      document.body.style.setProperty('--cor-da-lista', '#555555')
   }else{
      document.body.style.setProperty('--cor-de-fundo', '#d2d2d2')
      document.body.style.setProperty('--cor-da-fonte', 'black')
      document.body.style.setProperty('--cor-da-lista', 'white')
   }
}