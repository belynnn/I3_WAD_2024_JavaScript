//Permet d'afficher un popup avec le message en paramètre.
//alert("Bienvenue sur mon site !")

// Affectation 
let nombre = 52;


// Vérification entre les valeurs

console.log(nombre == "52"); // True
console.log(nombre == 52); // True

// Vérification entre les valeurs et les types

console.log(nombre === "52"); // False
console.log(nombre === 52); // True


// concaténation entre str et number
console.log(26 + "26"); // /!\ pas de convertion implicite (resultat : 2626)

////////////////////// VARIABLES ///////////////////

console.log("Variables : ");

const PI = 3.14;
console.log(PI);

// PI = 2;  -> Impossible de modifier la valeur d'une constante
// console.log(PI);

let ageUtilisateur = 33;
console.log(ageUtilisateur);
ageUtilisateur = ageUtilisateur + 1
console.log(ageUtilisateur);

ageUtilisateur = "Bonjour" // ne provoque pas d'erreur, le type est modifié
console.log(ageUtilisateur);

////////////////////// PROMPT ///////////////////

console.log("Prompt : ");

//ageUtilisateur = prompt("Veuillez entrer votre age : ")
console.log(typeof(ageUtilisateur)); 
ageUtilisateur = +ageUtilisateur // convertion explicite
console.log(typeof(ageUtilisateur)); 


let variable = 30+20+10;
console.log(variable);

let resultat = 3 + 3 + Number("3")
console.log(resultat);

let maVariableNonDefinie;
let maVariableNull = null;

console.log(typeof(maVariableNonDefinie));
console.log(typeof(maVariableNull));
console.log(maVariableNonDefinie);
console.log(maVariableNull);



