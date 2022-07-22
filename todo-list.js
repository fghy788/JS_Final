const removeManager = (event) => {
  const trash = event.target.parentElement;
  const getspan = trash.querySelector("span").innerText;

  let tempDB = JSON.parse(localStorage.getItem("todos"));
  for (let i = 0; i < tempDB.length; i++) {
    if (tempDB[i] == getspan) {
      tempDB.splice(i, 1);
    }
  }
  localStorage.setItem("todos", JSON.stringify(tempDB));
  trash.remove();
};

const addli = (V) => {
  const todoUl = document.getElementById("todo_ul");
  const add_li = document.createElement("li");
  const add_span = document.createElement("span");
  add_span.innerText = V;
  const add_button = document.createElement("button");
  add_button.addEventListener("click", (event) => removeManager(event));
  add_button.innerText = "X";
  add_li.appendChild(add_span);
  add_li.appendChild(add_button);
  todoUl.appendChild(add_li);
};
//add_li

let todo_list = [];
const loadtodos = () => {
  if (localStorage.getItem("todos") !== null) {
    todo_list = JSON.parse(localStorage.getItem("todos"));
    todo_list.forEach((element) => {
      addli(element);
    });
  }
};
//load_function
loadtodos();
//load

const savetodos = (V) => {
  todo_list.push(V);
  addli(V);
  localStorage.setItem("todos", JSON.stringify(todo_list));
};
//save

const manager = document.getElementById("todo_form");
manager.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = document.getElementById("todo_input").value;
  savetodos(inputValue);
  inputValue.value = "";
});
//event listener
