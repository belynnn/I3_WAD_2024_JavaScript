// Récupération du paragraphe de départ via son Id
const paraDepart = document.getElementById("depart");
console.dir(paraDepart)

// 1ere Methode : récupération de l'élément suivant et de l'élément suivant recupéré
console.dir(paraDepart.nextElementSibling.nextElementSibling)

// 2eme Methode : récupération du parent
const paraDepartParent = paraDepart.parentElement

// depuis le parent récupération du dernier élément
console.dir(paraDepartParent.lastElementChild)
// depuis le parent, parcourir la liste HTMLCollection et récupérer le dernier élément
console.dir(paraDepartParent.children[paraDepartParent.childElementCount - 1])

// Hors exo : récupération de la div via son nom de balise /!\ C'est une liste qui est retournée
const div = document.getElementsByTagName("div")
// récupération de la Valeur A
console.dir(div.item(0).firstElementChild)



