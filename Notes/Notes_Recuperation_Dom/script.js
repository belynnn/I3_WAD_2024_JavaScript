// // const plats1 = document.getElementsByTagName('li');
// // console.log(plats1);
// // // return HTMLCollection


// const margarita = document.querySelector('li');
// console.log(margarita);
// // récupère seulement le texte (pas les balises) à l'intérieur de la balise sélectionnée
// console.log(margarita.innerText);
// // récupère tout le code à l'intérieur de la balise
// console.log(margarita.innerHTML);
// // return NodeList -> + utilisé

// // la balise <strong> ne sera pas interprêté comme balise
// margarita.innerText = "<strong>Margarita</strong>";
// // la balise <strong> sera interprêtée comme balise
// margarita.innerHTML = "<strong>Margarita</strong>";

// // On veut rajouter le plat de pate 4 fromages à la liste des plats <li>4 fromages</li>
// const list_pate = document.querySelector('#list_pate')

// list_pate.innerHTML = list_pate.innerHTML + "<li>4 fromages</li>"

// // On veut ajouter la classe 'red' au premier enfant de #list_pate
// const premierEnfant = document.querySelector("#list_pate li");
// const deuxiemeEnfant = document.querySelector("#list_pate li:nth-child(2)");
// console.log(deuxiemeEnfant.innerText);
// const tousLesEnfants = document.querySelectorAll("ul li");
// const troisiemeEnfant = tousLesEnfants[2];
// console.log(troisiemeEnfant.innerText);
// premierEnfant.classList.toggle('red');

// const hawai = document.querySelector('ul>li:nth-child(2)');
// console.log(hawai.innerText);
// console.log(hawai.firstChild);
// console.log(hawai.firstElementChild);



// EVENTS - on veut envoyer 'message envoyé' au clique gauche sur le bouton
const btn_send = document.getElementById('btn_send');

// ! 1ère façon de faire - fonction anonyme, va lire les 2 et exécuter les 2
btn_send.addEventListener('click', function() {
    alert('Message envoyé.');
})
btn_send.addEventListener('click', function() {
    console.log('message envoyé');
})

// ! 2ème façon de faire - moins bien car va actionner le dernier .onclick
// btn_send.onclick = function() {
//     alert('Message envoyé.')
// };
// btn_send.onclick = function() {
//     console.log('message envoyé');
// };

// ! Récupération des valeurs

btn_send.addEventListener('click', function(){
    const pseudo = document.getElementById('pseudo');
    const message = document.getElementById('message');
    const pseudoValue = pseudo.value;
    const messageValue = message.value;
    
    alert('pseudo : ' +pseudoValue+ ' - message : ' +messageValue)
})