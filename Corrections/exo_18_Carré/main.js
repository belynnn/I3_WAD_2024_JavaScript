const btnSquare = document.getElementById ('btnSquare');
const userInput = document.getElementById ('user_input');

//                type d'action v     v callback/fonction anonyme (on l'appel plus tard)
btnSquare.addEventListener('click', calculateSquare);
userInput.addEventListener('keyup', (event) => {
    console.log ("Exécution de la fonction event au keyup");

    if (event.key !== 'Enter') {
        return
    }
    calculateSquare();
});

function squareOf (number) {
    console.log ("Exécution de la fonction squareOf");

    return number * number;
};

function calculateSquare (event) {
    console.log ("Exécution de la fonction calculateSquare");
    // Récupérer la valeur dans le champs
    let value = userInput.valueAsNumber;

    // Calculer le carré
    let squareValue = squareOf (value);

    // Appliquer la valeur dans le champs résulat
    const userResult = document.getElementById ('user_result');
    userResult.value = squareValue;
};