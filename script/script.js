const btn = document.querySelector('#add')
const lista = document.querySelector('.lista')

btn.addEventListener('click', (e)=> {
  e.preventDefault()

  const tarefa = document.getElementById('task').value

  lista.innerHTML +=  `
    <li class="tarefas">
    ${tarefa}<button class="btnDelete">🗑</button>
    </li>`

  const btn = document.querySelectorAll('.tarefas')

  btn.forEach((button)=>{
    button.addEventListener('click', () => {
      button.remove()
    })
  })

})



