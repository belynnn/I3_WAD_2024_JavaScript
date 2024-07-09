/*
// Récupérer les éléments HTML et les stocker dans une variable
const userInput = document.getElementById('user_input');
const btnAdd = document.getElementById('btn_add');
const userList = document.getElementById('user_list');

// Paramétrer le comportement de l'élément
btnAdd.addEventListener('click', () => {
    console.log('Aloha');
    // Créer l'élément li dans l'HTML
    const li = document.createElement('li');

    userList.append(li);

    li.textContent = userInput.value;
});
*/



// Correction
// Récupérer les éléments HTML (toujours travailler par référence)
const btnAddTask = document.getElementById('btnAddTask');
const taskName = document.getElementById('taskName');
const tasks = document.getElementById('tasks');

// Paramétrer le comportement de l'élément
btnAddTask.addEventListener('click', addTask);

function addTask () {
    // Nettoyage de la valeur / Retirer les espaces avant ET/OU après la valeur
    let safeValue = taskName.value.trim();

    // Vider le champ une fois la valeur entrée
    taskName.value = "";

    // Focus sur l'input une fois la valeur ajoutée à la liste
    taskName.focus();

    // Vérifi qu'il y a une valeur, sinon on sort / Si champ vide, on sort fait rien
    if (safeValue === "") return;

    // Créer l'élément de la liste
    const task = document.createElement('li');
    
    // Récupérer la valeur du champ et paramétrer l'élément de la liste
    task.innerText = safeValue;
    
    // Ajouter l'élément de la liste à la liste
    tasks.append(task);

    // Création du bouton de suppression
    const btnRemoveTask = document.createElement('button');

    // Modifier le contenu du bouton
    btnRemoveTask.innerText = '❌';

    // Ajouter le bouton au li
    task.append(btnRemoveTask);

    // Ajouter un écouteur d'événement pour enclencher la suppression du li
    btnRemoveTask.addEventListener('click', removeTask);
};

function removeTask (event) {
    // Supprime le li en cliquant sur le bouton de suppression
    event.target.parentElement.remove();
};