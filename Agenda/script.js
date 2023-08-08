var count = 0
var semana = document.getElementById('semana1')

semana.addEventListener('click', (semana=>{
   count ++
   dia = document.getElementById(semana.target.innerHTML)
   semana.target.style.borderColor = 'red'
   
   console.log(`O dia atual é ${localStorage.getItem('AtualDia')}`)
   let abrir = window.confirm('deseja abrir uma lista de tarefas?')
   if(abrir ==true){
      window.location = '../index.html'
   }
}))