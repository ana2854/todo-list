//ajout note

const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const todos = []
LOCAL_STORAGE_PREFIX = "TODO_LIST";
TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoName = todoInput.value;
  if(todoName === "") return 
  todos.push(todoName)
  displayTodo(todoName);
  saveTodos()
  todoInput.value = "";
});

function displayTodo(todoName) {
  const templateClone = template.content.cloneNode(true);
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = todoName;
  list.appendChild(templateClone);
  console.log(templateClone);
}

function saveTodos () {
   localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
}