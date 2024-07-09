// let firstNumber = parseInt(prompt('Entrez votre premier nombre : '));
// let operator = prompt('Entrez un opérateur (+,-,*,/) : ');
// let secondNumber = parseInt(prompt('Entrez votre deuxième nombre : '));
// let result;
// let operationValid = true;

// if (!isNaN(firstNumber) && !isNaN(secondNumber)){
//     if (operator === '+') {
//         result = firstNumber + secondNumber;
//     }
//     else if (operator === '-') {
//         result = firstNumber - secondNumber;
//     }
//     else if (operator === '*') {
//         result = firstNumber * secondNumber;
//     }
//     else if (operator === '/') {
//         if(secondNumber != 0) {
//             result = firstNumber / secondNumber;
//         }
//         else {
//             alert('Division par 0 impossible.');
//             operationValid = false;
//         }
//     }
//     else {
//         alert('Opérateur invalide.');
//         operationValid = false;
//     }
    
//     if (operationValid) {
//         alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
//     }
// }
// else {
//     alert("‼️ L'une des valeurs n'est pas un nombre. ‼️")
// }

let firstNumber = parseInt(prompt('Entrez votre premier nombre : '));
let operator = prompt('Entrez un opérateur (+,-,*,/) : ');
let secondNumber = parseInt(prompt('Entrez votre deuxième nombre : '));



if (!isNaN(firstNumber) && !isNaN(secondNumber)){
    switch(operator) {
        case '+' :
            result = firstNumber + secondNumber;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        case '-' :
            result = firstNumber - secondNumber;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        case '*' :
            result = firstNumber * secondNumber;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        case '/' :
            if(secondNumber != 0) {
                result = firstNumber / secondNumber;
            }
            else {
                alert('Division par 0 impossible.');
                operationValid = false;
            }
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
            break;
        default :
            console.log('Opérateur invalide.')
            break;
    }
}
else {
    alert("‼️ L'une des valeurs n'est pas un nombre. ‼️")
}