/* Kommentar
for
flere
linjer */

// Kommentar for en linje

console.log("Hello?");

/* Lager en variabel som lagrer at den henter et element fra HTML med id-navn addTodo */
const addTodo = document.getElementById("addTodo"); // En variabel som henter HTML element med #addTodo
console.log(addTodo);

/* */
addTodo.addEventListener("click", function (event) {
    event.preventDefault(); //
    console.log("Button click?");

    /* */
    const todoInput = document.getElementById("todoInput");
    console.log(todoInput);
    const todoInputValue = todoInput.value;
    console.log(todoInputValue);

    /* */
    const todoItem = document.createElement("li");
    console.log(todoItem);
    todoItem.textContent = todoInputValue;

    /* */
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "Slett";
    deleteTodo.addEventListener("click", function () {
        todoItem.remove(); //
    });

    /* */
    const todoDisplay = document.getElementById("todoDisplay");
    console.log(todoDisplay);

    /* */
    todoItem.appendChild(deleteTodo);
    todoDisplay.appendChild(todoItem);
});