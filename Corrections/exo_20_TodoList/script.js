/*
    Exercice 02 - Todo List (remove/removeChild, parentNode)

    Reprennez l'exercice précédent pour y ajouter un bouton de suppression.
    Lorsqu'on clique sur le bouton, supprime la tâche.
*/

// Récupérer les éléments HTML
// (toujours travailler par référence)
const btnAddTask = document.getElementById('btnAddTask'); // button
const taskName = document.getElementById('taskName'); // input
const tasks = document.getElementById('tasks'); // ul

btnAddTask.addEventListener('click', addTask);

function addTask() {

    // Nettoyage de la valeur
    let safeValue = taskName.value.trim();

    // Vider le champs
    taskName.value = "";
    taskName.focus();

    // Vérifie qu'il y a une valeur, sinon on sort
    if (safeValue === "") return;

    // Créer l'élément de la liste
    const li = document.createElement('li');

    // Récupérer la valeur du champ et paramétrer l'élément de la liste
    li.innerText = safeValue;

    // Ajouter l'élément de la liste à la liste
    tasks.append(li);

    // Création du bouton de suppression
    const btnRemove = document.createElement('button');
    btnRemove.innerText = "❌";
    li.append(btnRemove);

    btnRemove.addEventListener('click', removeTask)
}

function removeTask (event) {
    // console.log('event :>> ', event);
    // console.log('event.target :>> ', event.target);
    event.target.parentElement.remove();
}