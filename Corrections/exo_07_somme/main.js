/* 
Faites en sorte que lorsqu'on click sur la margarita,
l'input somme augmente de son prix (10 euros).
*/

const input = document.getElementById('input-somme')
const margarita = document.querySelector('li')


margarita.addEventListener('click', function() {
    // input.value = parseInt(input.value) + 10
    // input.value = input.valueAsNumber + 10
    input.valueAsNumber += 10
})