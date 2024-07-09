const btn = document.getElementById('btnSquare');
const userInput = document.getElementById('nombreEntre');

btn.addEventListener('click', calculateSquare);
userInput.addEventListener('keyup', (event) => {
    
    if (event.key !== "Enter") return;
    calculateSquare();
})

function squareOf(number) {
    return number * number;
}

function calculateSquare() {
    // Récupérer la valeur dans le champ
    let value = userInput.valueAsNumber;

    // Calculer le carré
    let squareValue = squareOf(value);

    // Appliquer la valeur dans le champ résultat
    const resultInput = document.getElementById('nombreResultat');
    resultInput.value = squareValue;
}