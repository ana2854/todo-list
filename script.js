//ajout note

const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoName = todoInput.value;
  displayTodo(todoName);
  todoInput.value = "";
});

function displayTodo(todoName) {
  const templateClone = template.content.cloneNode(true);
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = todoName;
  list.appendChild(templateClone);
  console.log(templateClone);
}
