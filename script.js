/* Kommentar
for
flere
linjer */

// Kommentar for en linje

console.log("Hello?");

/* Lager en variabel som lagrer at den henter et element fra HTML med id-navn addTodo */
const addTodo = document.getElementById("addTodo"); // En variabel som henter HTML element med #addTodo
console.log(addTodo);

/** is this comment linked to function? */ //sånn linkes kommentar til funksjon
function testcommmentlink () {
console.log("yeah");
};

/* Legger til hendelseslytter som kjører en funksjon ved klikk */
addTodo.addEventListener("click", function (event) {
    event.preventDefault(); // hindrer funksjonen fra å restarte som er default i forms
    console.log("Button click?");

    /* Lager konstant som henter inputsfeltet fra html-dokumentet */
    const todoInput = document.getElementById("todoInput");
    console.log(todoInput);
    /* Lager egen konstant som henter ut verdien av inputsfeltet, altså bare det som skrives inn. */
    const todoInputValue = todoInput.value;
    console.log(todoInputValue);

    /* Lager et liste-element i HTML som skal ta i mot gjøremål. */
    const todoItem = document.createElement("li");
    console.log(todoItem);
    /* Lager egen konstant for tekstinnholdet i liste-elementet. */
    todoItem.textContent = todoInputValue;

    /* Lager en knapp som skal brukes til å slette gjøremål, med tekst "Slett," og så hendelseslytter på klikk. */
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "Slett";
    deleteTodo.addEventListener("click", function () { if (todoItem.classList.value == "finished") {
        todoItem.remove();} //metode for å slette gjøremål ved klikk hvis den er klassifisert som ferdig}
        else {console.log("Kan ikke slette uferdig gjøremål!");}
    });
    /* Lager en knapp som skal markere gjøremål gjort */
    const markFinished = document.createElement("button");
    markFinished.textContent = "Ferdig";
    markFinished.addEventListener("click", () => { 
        todoItem.classList.add("finished");
        console.log(todoItem.classList.value);
     });

    /* Lager konstant som lagrer listeelementet i fra HTML hvor gjøremålslisten skal vises. */
    const todoDisplay = document.getElementById("todoDisplay");
    console.log(todoDisplay);

    /* Lager elementer i DOM av sletteknapp-variabelen og ferdigvariabelen og visningsvariabelen. */
    todoItem.appendChild(deleteTodo);
    todoItem.appendChild(markFinished);
    todoDisplay.appendChild(todoItem);
});