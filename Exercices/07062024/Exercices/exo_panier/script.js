// Faites en sorte que lorsqu'on click sur la margarita, la somme augmente de son prix (10 euros)

const inputPrice = document.getElementById('input-somme');
const margaritaButton = document.querySelector('.btn');

margaritaButton.addEventListener('click', function() {
    console.log('coucou : clicked add 10');
    inputPrice.valueAsNumber += 10;
})