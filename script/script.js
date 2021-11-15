const btn = document.querySelector('#add')
const lista = document.querySelector('.lista')

function inserirElementos(e) {
  e.preventDefault()

  const tarefa = document.getElementById('task').value

  lista.innerHTML +=
    `
    <div>
      <input type="checkbox" id="check">
      <li class="tarefas" >${tarefa}<button>🗑</button></li>
    </div>`

  const btn = document.querySelectorAll('.tarefas')
  const checks = document.querySelectorAll('#check')

  checks.forEach((check) => {
    check.addEventListener('click', function addLineTrought(){

      check.nextElementSibling.classList.toggle('line')

    })
  })

  btn.forEach((button)=>{
    button.addEventListener('click', function removerElemento() {

      button.previousElementSibling.remove()
      button.remove()

    })
  })



}

btn.addEventListener('click', inserirElementos)

