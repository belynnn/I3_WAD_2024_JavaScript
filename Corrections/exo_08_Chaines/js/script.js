const CHAINE = "ma formation javascript";
const CHAINE_DEPUIS_HTML = document.getElementById("monInput");

let chaineRecupere = CHAINE_DEPUIS_HTML.value

// Récupération de l'indice de départ du mot 'ma'
console.log(chaineRecupere.indexOf("ma"))

// Récupération de l'indice de la lettre 'p'
console.log(chaineRecupere.indexOf("p"))

// Récupération d'une valeur sur base d'un indice
console.log(chaineRecupere.charAt(21))

// Remplacer javascript par Java
chaineRecupere = chaineRecupere.replace("javascript", "Java")
console.log(chaineRecupere)

// Séparer les élements d'une chaine sur base d'un délimiteur
let chaineArray = chaineRecupere.split(" ")
console.log(chaineArray)

// BONUS : retourner une chaine de caractères
let chaineInverse = CHAINE.split("").reverse().join("");
console.log(chaineInverse)