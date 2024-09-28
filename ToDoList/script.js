let todos = []; // Array vuoto per memorizzare i todo

// Aggiunge un listener per il form che gestisce l'invio (submit)
document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Previene il comportamento predefinito (ricaricare la pagina)
  const todoText = document.getElementById("todo-input").value; // Prende il testo dall'input
  if (todoText !== "") {
    // Controlla se l'input non è vuoto
    addTodo(todoText); // Aggiunge il todo con il testo inserito
    document.getElementById("todo-input").value = ""; // Pulisce il campo di input
    render(); // Aggiorna la lista visualizzata
  }
});

// Funzione per aggiungere un nuovo todo all'array
function addTodo(text) {
  todos.push({
    text: text, // Testo del todo
    completed: false, // Il todo inizia come non completato
  });
}

// Funzione per rimuovere un todo dall'array
function removeTodo(index) {
  todos.splice(index, 1); // Rimuove il todo dall'array in base all'indice
  render(); // Aggiorna la lista visualizzata
}

// Funzione per cambiare lo stato completato/non completato di un todo
function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed; // Inverte lo stato "completed"
  render(); // Aggiorna la lista visualizzata
}

// Funzione per aggiornare la lista dei todo sullo schermo
function render() {
  const listElement = document.getElementById("todo-list"); // Seleziona l'elemento della lista
  listElement.innerHTML = ""; // Svuota la lista visualizzata

  // Cicla ogni todo nell'array
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li"); // Crea un nuovo elemento <li> per ogni todo
    todoItem.textContent = todo.text; // Imposta il testo del todo nell'elemento
    todoItem.className = todo.completed ? "completed" : ""; // Aggiunge una classe se il todo è completato

    // Crea il pulsante per eliminare il todo
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Elimina"; // Testo del pulsante "Elimina"
    deleteButton.onclick = function () {
      removeTodo(index); // Chiama la funzione per rimuovere il todo
    };

    // Crea il pulsante per contrassegnare come completato/non completato
    const completeButton = document.createElement("button");
    completeButton.textContent = "Completa"; // Testo del pulsante "Completa"
    completeButton.onclick = function () {
      toggleCompleted(index); // Chiama la funzione per invertire lo stato completato
    };

    // Aggiunge i pulsanti e il todo all'elemento della lista
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(completeButton);
    listElement.appendChild(todoItem); // Aggiunge il todo alla lista visualizzata
  });
}

render(); // Inizializza la visualizzazione della lista vuota
