const btn = document.querySelector('#add')
const lista = document.querySelector('.lista')

let tarefasLista = localStorage.getItem('tarefas');
if(!tarefasLista) {
  tarefasLista = []

}
else {
  tarefasLista = JSON.parse(tarefasLista)
}

tarefasLista.forEach((tarefa) => {
  lista.innerHTML += `
  <div class="tarefa" data-task="${tarefa}">
    <input type="checkbox" class="check" ${tarefa.completa ? "checked" : ""}>
    <li class="tarefas">${tarefa.nome}<button class="deleteBtn" </button></li>
  </div>`
})

function inserirElementos(e) {
  e.preventDefault()
  //pega o valor escrito pelo usuario
  const tarefa = document.getElementById('task').value

  lista.innerHTML += `
  <div class="tarefa" data-task="${tarefa}">
    <input type="checkbox" class="check">
    <li class="tarefas">${tarefa}<button class="deleteBtn" ></button></li>
  </div>`


  //adiciona a tarefa ao array
  tarefasLista.push({nome: tarefa, completa: false})


  setLocalStorage(tarefasLista)
  //seleciona o li criado
  const btn = document.querySelectorAll('.tarefas')
  //seleciona o input criado junto do li
  const checks = document.querySelectorAll('.check')

  //faz um foreach por cada input criado, caso o usuario marque o input, ele
  // adiciona a class line, que adiciona o text-decoration: line-through a li
  checks.forEach((check) => {
    let task = check.parentElement.dataset.task

    check.addEventListener('click', ()=>{

      check.nextElementSibling.classList.toggle('line')

      tarefasLista.forEach((valor) => {
        if (valor.nome == task) {
          valor.completa = !valor.completa;
        }
      })

      setLocalStorage(tarefasLista)
    })
  })

  //toda vez que o usuario clicar no btn da lixeira, a tarefa vai ser removida
  btn.forEach((button)=>{
    let task = button.parentElement.dataset.task
    console.debug(button.dataset)
    console.log({button})

    button.addEventListener('click', function removerElemento() {
      if (!window.confirm("deseja mesmo excluir essa tarefa?")) return;
      //remove o input
      tarefasLista = tarefasLista.filter((valor) => valor.nome !== task)
      setLocalStorage(tarefasLista)

      button.previousElementSibling.remove()
      //remove a li
      button.remove()
    })
  })

  document.getElementById('task').value =''
}
btn.addEventListener('click', inserirElementos)

function setLocalStorage(valor) {
  if (!localStorage.getItem('tarefas')) {
    localStorage.setItem('tarefas',JSON.stringify([]));
  }

  localStorage.setItem('tarefas', JSON.stringify(valor));
}

