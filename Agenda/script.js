var count = 0
var semana = document.getElementById('semana1')

semana.addEventListener('click', (semana=>{
   count ++
   dia = semana.target
   console.log(dia.id)
   //localStorage.setItem('dia'+dia.id, dia)
   let abrir = window.confirm('deseja abrir uma lista de tarefas?')
   if(abrir ==true){
      window.location = '../index.html'
   }
}))