// const plats1 = document.getElementsByTagName('li')

// console.log(plats1)

const margarita = document.querySelector('li')
console.log(margarita)
console.log(margarita.innerHTML) 
// recup tout le code a l'interieur de la balise sélectionnée
console.log(margarita.innerText) 
// recup seulement le text (pas les balises) à l'interieur de la balise selectionné

// margarita.innerText = "<strong>margarita</strong>"
// la balise <strong> ne sera pas interpètée comme balise
// margarita.innerHTML = "<strong>margarita</strong>"
// la balise <strong> sera interprètée comme balise

// On veut rajoute le plat de pate 4 fromages à la liste des plats
// const listePate = document.getElementById('list_pate')
const listePate = document.querySelector('#list_pate')
// listePate.innerHTML = listePate.innerHTML + "<li> 4 fromages </li>"
listePate.innerHTML += "<li> 4 fromages </li>"


// On veut ajouter la classe 'red' au premier enfant de #list_pate
const premierEnfant = document.querySelector("#list_pate li")
premierEnfant.classList.add('red')

// const deuxiemeEnfant = document.querySelector("#list_pate li:nth-child(2)")
const tousLesEnfants = document.querySelectorAll("#list_pate li")
const deuxiemeEnfant = tousLesEnfants[1];
console.log(tousLesEnfants)
console.log(deuxiemeEnfant)

// Node vs Element
console.log('firstChild', margarita.firstChild)
console.log('firstElementChild', margarita.firstElementChild)
console.log('node list', margarita.childNodes)
console.log('element list', margarita.children)

// Events
const button = document.getElementById('btn-envoi')
// 1e facon - la meilleur
button.addEventListener('click', function(){ alert('message envoyé') })
// button.addEventListener('click', function(){ console.log('message envoyé') })
// 2e manière - moins bien car peut ecraser un comportement précédent
// button.onclick = function(){ alert('message envoyé');  }
// button.onclick = function(){ console.log('message envoyé'); }


// Récupération de valeurs
button.addEventListener('click', function(){
    const pseudo = document.getElementById('pseudo').value
    const message = document.getElementById('message').value
    alert('pseudo: ' +pseudo+ ', message: ' + message)
})

