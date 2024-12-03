let todoList = JSON.parse(localStorage.getItem("todoList")) || []; // Retrieve stored todos or initialize as empty
displayTodo();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let inputDateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value.trim();
  let todoDate = inputDateElement.value.trim();

  if (todoItem === "" || todoDate === "") {
    alert("Please enter both the task and due date.");
    return;
  }

  // Add new todo to the list
  todoList.push({
    item: todoItem,
    date: todoDate,
  });

  // Save updated todo list to local storage
  localStorage.setItem("todoList", JSON.stringify(todoList));

  // Clear input fields
  inputElement.value = "";
  inputDateElement.value = "";

  // Refresh the displayed list
  displayTodo();
}

function displayTodo() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  // Generate HTML for each todo item
  for (let i = 0; i < todoList.length; i++) {
    let todoItem = todoList[i].item;
    let dueDate = todoList[i].date;
    newHtml += `
    <span style="color: white;">${todoItem}</span> 
    <span>${dueDate}</span> 
    <button class="btn-delete" onClick="deleteTodo(${i})">Delete</button>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  // Remove the selected todo
  todoList.splice(index, 1);

  // Save updated todo list to local storage
  localStorage.setItem("todoList", JSON.stringify(todoList));

  // Refresh the displayed list
  displayTodo();
}

// Load and display tasks on page load
window.onload = function () {
  displayTodo();
};
