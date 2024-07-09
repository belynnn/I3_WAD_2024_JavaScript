let nombre = 26;

console.log(nombre == "26");
console.log(nombre == 26);
console.log(nombre === "26");
console.log(nombre === 26);



// // // // // // // // // // // // // // // // //
// Affectation
// // // // // // // // // // // // // // // // //
let nombre2 = 52;

// Vérification entre les valeurs
console.log(nombre == "52"); // True
console.log(nombre == 52); // True

// Vérification entre les valeurs et les types
console.log(nombre === "52"); // False
console.log(nombre === 52); // True

// Vérification entre les valeurs et les types
console.log("26" + 26); // Pas de conversion implicite (résultat : 2626)



// // // // // // // // // // // // // // // // //
// VARIABLE
// // // // // // // // // // // // // // // // //
console.log("---> Variables : ");

const PI = 3.14;

console.log(PI);

// PI = 2 // Impossible de modifier la valeur d'une constante
// console.log(PI);

let age_utilisateurice = 30;
console.log(age_utilisateurice);
age_utilisateurice += 1;
console.log(age_utilisateurice);
age_utilisateurice = "Bonjour"; // Ne provoque pas d'erreur, le type est modifié
console.log(age_utilisateurice);



// // // // // // // // // // // // // // // // //
// PROMPT
// // // // // // // // // // // // // // // // //
console.log("Prompt : ");

age_utilisateurice = prompt("Veuillez entrer votre âge : ");
age_utilisateurice2 = +"36" + 1; // Conversion explicite, même chose que Number("36") ou parseInt("36")
age_utilisateurice3 = "42" - 1;

console.log(typeof(age_utilisateurice));
console.log(age_utilisateurice);

console.log(typeof(age_utilisateurice2));
console.log(age_utilisateurice2);

console.log(typeof(age_utilisateurice3));
console.log(age_utilisateurice3);