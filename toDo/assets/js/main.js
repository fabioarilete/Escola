const txtNewTarefa = document.querySelector(".txtNovaTarefa");
const btnAddTarefa = document.querySelector(".btnAddTarefa");
const tarefas = document.querySelector(".tarefas");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function clearTxtNewTarefa() {
  txtNewTarefa.value = "";
  txtNewTarefa.focus();
}

function createButtonClear(li) {
  li.innerText += "";
  const btnClear = document.createElement("button");
  btnClear.innerText = "Apagar";
  btnClear.setAttribute("class", "apagar");
  btnClear.setAttribute("title", "Apagar ou concluir a tarefa.");
  li.appendChild(btnClear);
}

txtNewTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!txtNewTarefa.value) return;
    createTarefa(txtNewTarefa.value);
  }
});

function createTarefa(textoInput) {
  const li = createLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  clearTxtNewTarefa();
  createButtonClear(li);
  saveTarefas();
}

btnAddTarefa.addEventListener("click", function () {
  if (!txtNewTarefa.value) return;
  createTarefa(txtNewTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    saveTarefas();
  }
});

function saveTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}
function addTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    createTarefa(tarefa);
  }
}
addTarefasSalvas();
