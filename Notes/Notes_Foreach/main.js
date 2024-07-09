const ARRAY_DAY_OF_THE_WEEK = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const TABLE_OF_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SHOPPING_LIST = document.querySelectorAll('li');
// const SHOPPING_LIST = document.getElementsByTagName('li');

console.log(SHOPPING_LIST);

// fonction de callback
// ARRAY_DAY_OF_THE_WEEK.forEach((day, i, array) => {
//     console.log(`${i} : ${day}`);
//     console.log(array);
// });

// Travail avec les éléments
// Peut travailler avec les Node List et les HTML Collection
// for (const produit of SHOPPING_LIST) {
//     produit.addEventListener('click', function(){
//         alert(`${produit} a été ajouté au panier.`);
//     });
// };

// HTML selection n'est pas considéré comme un tableau
/*
SHOPPING_LIST.forEach(produit => {
    produit.addEventListener('click', function(){
        alert(`${produit} a été ajouté au panier.`);
    });
});
*/

// Convertir une HTML Collection en Node List pour pouvoir la travailler avec le foreach
Array.from(SHOPPING_LIST).forEach(produit => {
    produit.addEventListener('click', function(){
        alert(`${produit} a été ajouté au panier.`);
    });
});

// // Travail avec l'indice des éléments
// for (let i = 0 ; i < SHOPPING_LIST.length ; i++) {
//     SHOPPING_LIST[i].addEventListener('click', function(){
//         alert(`${SHOPPING_LIST[i]} a été ajouté au panier.`);
//     });
// };