//! 1)  Stockez dans une variable, le résultat d'une saisie au clavier et affichez-la.
const STRING_RESULT = 'Ceci est une saisie au clavier, appellée "string" en programmation.';
const EXO1_SUBMIT = document.querySelector('#exo1_submit');

EXO1_SUBMIT.addEventListener('click', function() {
    alert(`#️⃣ EXO_01 : ${STRING_RESULT}`);
});



//! 2)  À la place d'afficher simplement la variable, affichez son contenu précédé de la chaîne de caractères "Saisie clavier: ".
const EXO2_SUBMIT = document.querySelector('#exo2_submit');

EXO2_SUBMIT.addEventListener('click', function() {
    alert(`#️⃣ EXO_02 : Saisie clavier : ${STRING_RESULT}`);
});



//! 3)  Récupérez au clavier un nombre et stockez-le dans une variable.
const EXO3_SUBMIT = document.querySelector('#exo3_submit');

EXO3_SUBMIT.addEventListener('click', function() {
    let exo3UserInput = parseInt(prompt("Veuillez entrer un nombre"));
    alert(`#️⃣ EXO_03 : Vous avez entré ${exo3UserInput}`);
    
    //! 4)  Si le nombre qui se trouve dans la variable number est plus grand que 10, affichez la chaîne de caractères “Ce nombre est plus grand que 10”.
    if (exo3UserInput > 10) {
        alert("#️⃣ EXO_04 : Ce nombre est plus grand que 10.");
    //! 5)  À la suite de la condition, si celle-ci n'est pas remplie, affichez le message suivant: “Le nombre est plus petit ou égal à 10.”
    } else {
        alert("#️⃣ EXO_05 : Le nombre est plus petit ou égal à 10.")
    }
})



//! 6)  Récupérez un nombre au clavier et stockez-le dans une variable.
//  Si le nombre récupéré est plus grand ou égale à 10 affichez “Bravo!”.
//  Sinon, si il est plus grand que 8 affichez “Pas mal.”
//  Sinon, si le nombre est plus grand que 5 affichez “Mouais, bof”
//  Et sinon dans les autres cas affichez “Pas terrible”
const EXO6_SUBMIT = document.querySelector('#exo6_submit');

EXO6_SUBMIT.addEventListener('click', function() {
    let exo6UserInput = parseInt(prompt("Veuillez entrer un nombre."));
    
    if (isNaN(exo6UserInput)) {
        exo6UserInput = parseInt(prompt("Veuillez entrer un nombre."));
    }

    if (!isNaN(exo6UserInput) && exo6UserInput >= 10) {
        alert("#️⃣ EXO_06 : Bravo!");
    } else if (!isNaN(exo6UserInput) && exo6UserInput > 8) {
        alert("#️⃣ EXO_06 : Pas mal.");
    } else if (!isNaN(exo6UserInput) && exo6UserInput > 5) {
        alert("#️⃣ EXO_06 : Mouais, bof");
    } else {
        alert("#️⃣ EXO_06 : Pas terrible");
    }
})



//! 7)  Écrivez un script qui demande à l'utilisateur un nombre (entre 1 et 10).
//  Tant qu'il ne rentre pas un chiffre entre 1 et 10, le programme demande à nouveau à l'utilisateur un nombre (entre 1 et 10).
const EXO7_SUBMIT = document.querySelector('#exo7_submit');

EXO7_SUBMIT.addEventListener('click', function() {
    let EXO7_USER_INPUT = 0;
    do {
        EXO7_USER_INPUT = parseInt(prompt("Entrez un nombre entre 1 et 10 inclus"));
        console.log("#️⃣ EXO_07 :", "❌ Valeur non-comprise ou nombre non-compris entre 1 et 10 inclus, réessayez.");
    } while (isNaN(EXO7_USER_INPUT) || EXO7_USER_INPUT < 1 || EXO7_USER_INPUT > 10);

    console.log("#️⃣ EXO_07 :", "✅ Vous avez entré un nombre compris entre 1 et 10 inclus.");
})



//! 8)  Écrivez un script qui demande à l'utilisateur un mot de passe.
//  Si le mot de passe entré n'est pas "Pyth0n" le programme demande à nouveau le mot de passe.
//  Quand le mot de passe est bon, le programme affiche "Mot de passe valide."
//  Après 3 tentatives infructueuses, le programme affiche "Mot de passe incorrect."
const EXO8_SUBMIT = document.querySelector('#exo8_submit');

EXO8_SUBMIT.addEventListener('click', function() {
    let EXO8_USER_INPUT = "";
    let disconnect = true;
    let count = 1;

    while (disconnect) {
        EXO8_USER_INPUT = prompt("Veuillez entrer le bon mot de passe.")

        if (EXO8_USER_INPUT != "Pyth0n") {
            if (count < 3) {
                alert("Mot de passe invalide.");
                count += 1;
            } else if (count === 3) {
                alert("Vous avez tenté de vous connecter trop de fois, veuillez réessayer dans 30 minutes.");
                break;
            }
        } else {
            alert("Mot de passe valide.");
            disconnect = false;
        }
    }
})



//! 9)  Écrivez un programme qui va générer trois nombres aléatoirement (entre 1 et 6).
//      Ensuite le programme va afficher les trois nombres
//      Si les trois nombres ne sont pas identiques, il recommence.
function generateRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

const EXO9_SUBMIT = document.querySelector('#exo9_submit');

EXO9_SUBMIT.addEventListener('click', () => {
    let FIRST_RANDOM_NUMBER = 0;
    let SECOND_RANDOM_NUMBER = 1;
    let THIRD_RANDOM_NUMBER = 2;
    
    do {
        alert(`❌ ${FIRST_RANDOM_NUMBER} - ${SECOND_RANDOM_NUMBER} - ${THIRD_RANDOM_NUMBER}`);

        FIRST_RANDOM_NUMBER = generateRandomNumber();
        SECOND_RANDOM_NUMBER = generateRandomNumber();
        THIRD_RANDOM_NUMBER = generateRandomNumber();

    } while (FIRST_RANDOM_NUMBER !== SECOND_RANDOM_NUMBER || SECOND_RANDOM_NUMBER !== THIRD_RANDOM_NUMBER);

    alert(`✅ ${FIRST_RANDOM_NUMBER} - ${SECOND_RANDOM_NUMBER} - ${THIRD_RANDOM_NUMBER}`)
})



//! 10) Demandez à l'utilisateur d'entrer des nombre jusqu'à ce qu'il donne la valeur 0.
//      Ensuite, affichez le plus grand et le plus petit nombre que l'utilisateur a donné.
const EXO10_SUBMIT = document.querySelector('#exo10_submit');

EXO10_SUBMIT.addEventListener('click', function() {
    
})



//! 11) Générez deux nombres aléatoire (entre 0 et 100)
//      Affichez ces deux nombres en demandant à l'utilisateur d'en donner la somme
//      Continuez à lui demander tant que la réponse est mauvaise.
//      À la fin du programme, affichez à l'utilisateur le nombre d'erreurs qu'il a commises.
const EXO11_SUBMIT = document.querySelector('#exo11_submit');

EXO11_SUBMIT.addEventListener('click', function() {
    
})