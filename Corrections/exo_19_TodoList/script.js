/*
    Créer un prototype de Todo List.
    Vous devez créer un champ dans lequel l'utilisateur pourra rentrer un libellé avec un bouton de validation.

    Lorsque vous cliquez sur le bouton, un élément de liste se créera dans la liste avec comme contenu, la valeur du champ.

    Bonus : Videz le champ une fois l'élément ajouté.
*/

// Récupérer les éléments HTML
// (toujours travailler par référence)
const btnAddTask = document.getElementById('btnAddTask'); // button
const taskName = document.getElementById('taskName'); // input
const tasks = document.getElementById('tasks'); // ul

btnAddTask.addEventListener('click', addTask);

function addTask () {

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
    
}