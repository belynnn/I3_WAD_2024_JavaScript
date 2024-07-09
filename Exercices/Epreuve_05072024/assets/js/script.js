// Deborah Clerckx - WAD24;

//
// Focus sur l'input '#userGuess' dès que la page est chargée;
document.querySelector('#userGuess').focus();

//
// Sélection des éléments du formulaire et autres éléments nécessaires;
const guessForm = document.querySelector('#guessForm');
const btnGuess = document.querySelector('#btnGuess');
const btnRefresh = document.querySelector('#btnRefresh');
const message = document.querySelector('#message');
const remainingAttempts = document.querySelector('#remainingAttempts');
const min = 1;
const max = 100;

//
// Génération d'un nombre aléatoire entre min et max;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let maxAttempt = 10;

//
// Mise en place du tableau récapitulatif dans le DOM;
const tableSummary = document.querySelector('#tableSummary');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const headerRow = document.createElement('tr');
const headers = ['Essais', 'Nombres entrés', 'Résultats'];

//
// Création des en-têtes du tableau;
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);
table.appendChild(tbody);
tableSummary.appendChild(table);

//
// Gestion de l'essai de l'utilisateur lors du submit;
guessForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //
    // Fonction pour ajouter une ligne au tableau récapitulatif lors de la tentative de l'utilisateur;
    function addRowAtEntry(){
        row.innerHTML = `
            <td>${10 - maxAttempt}</td>
            <td>${userGuess}</td>
            <td>${resultMessage}</td>
        `;
        tbody.appendChild(row);
    };

    //
    // Récupération de la valeur entrée par l'utilisateur;
    const userGuessInput = document.querySelector('#userGuess');
    const userGuess = parseInt(userGuessInput.value);
    
    //
    // Vérification si l'entrée est un nombre, si oui, s'il est valide entre min et max;
    if (isNaN(userGuess) || userGuess < min || userGuess > max) {
        message.textContent = `Veuillez saisir un nombre entre ${min} et ${max}`;
        return;
    };
    
    //
    // Décrémentation du nombre de tentatives restantes;
    maxAttempt--;
    remainingAttempts.textContent = maxAttempt;

    //
    // Création d'une nouvelle ligne dans le tableau récapitulatif;
    const row = document.createElement('tr');
    let resultMessage;

    //
    // Logique pour comparer le nombre entré avec le nombre aléatoire;
    if (userGuess === randomNumber) {
        //
        // Désactiver le submit si le nombre a été trouvé;
        message.textContent = "Félicitation, vous avez trouvé le nombre !";
        resultMessage = "🎉";
        addRowAtEntry();
        row.style.backgroundColor = "#cbffcb";
        btnGuess.disabled = true;
        userGuessInput.disabled = true;

    } else if (userGuess < randomNumber) {
        message.textContent = "Plus haut !";
        resultMessage = "🔺";
        addRowAtEntry();

    } else {
        message.textContent = "Plus bas !";
        resultMessage = "🔻";
        addRowAtEntry();
    };

    //
    // Si le nombre est suffisamment proche (5 nombres plus petit ou plus grand);
    if (Math.abs(userGuess - randomNumber) <= 5 && userGuess !== randomNumber) {
        message.textContent = "Presque !";
        row.style.backgroundColor = "#fffdcb";
    };

    //
    // Si le nombre d'essais est épuisé et que le nombre n'a pas été trouvé;
    if (maxAttempt === 0 && userGuess !== randomNumber) {
        message.textContent = `Dommage, le nombre était ${randomNumber} !`;
        resultMessage = "🎱";
        addRowAtEntry();
        row.style.backgroundColor = "#ffcbcb";
        tbody.appendChild(row);
        //
        // Désactiver le submit si le nombre max de tentatives est atteint;
        btnGuess.disabled = true; 
        userGuessInput.disabled = true;
    };
    
    //
    // Réinitialisation de l'input après chaque essai;
    userGuessInput.value = '';

    //
    // Gestion du bouton "Rafraîchir la page" pour recommencer le jeu;
    btnRefresh.addEventListener('click', function() {
        //
        // Rechargement de la page et réinitialisation de l'input;
        location.reload();
        userGuessInput.value = '';
    });
});