const DISPLAY = document.getElementById('display');
const BOUTON = document.getElementById('acheter');

// Récupérer les choix de l'utilisateurice
const EAU = document.getElementById('eau');
const COCA = document.getElementById('coca');
const SPRITE = document.getElementById('sprite');
const OASIS = document.getElementById('oasis');

// Stock
let eauStock = 0;
let cocaStock = 5;
let spriteStock = 10;
let oasisStock = 3;

// syntaxe fonction
/*
    function NomDeLaVariable(param1, param2) {
        // instructions
    }
*/

// syntaxe fonction anonyme (exemple)
/*
    BOUTON.addEventListener(param1, param2)
    BOUTON.addEventListener('click', function() {
        // instructions
    })
*/

// Ajout d'une gestion d'événement sur base d'un click
BOUTON.addEventListener('click', function() {
    if (EAU.checked) {
        if (eauStock > 0) {
            // Modifier l'affichage
            DISPLAY.value = 'Vous recevez : Eau';
            eauStock = eauStock - 1;
        }
        else {
            // Modifier l'affichage
            DISPLAY.value = 'SOLD OUT';
        }
    }
    else if (COCA.checked) {
        if (cocaStock > 0) {
            // Modifier l'affichage
            DISPLAY.value = 'Vous recevez : Coca';
            cocaStock = cocaStock - 1;
        }
        else {
            // Modifier l'affichage
            DISPLAY.value = 'SOLD OUT';
        }
    }
    else if (SPRITE.checked) {
        if (spriteStock > 0) {
            // Modifier l'affichage
            DISPLAY.value = 'Vous recevez : Sprite';
            spriteStock = spriteStock - 1;
        }
        else {
            // Modifier l'affichage
            DISPLAY.value = 'SOLD OUT';
        }
    }
    else if (OASIS.checked) {
        if (oasisStock > 0) {
            // Modifier l'affichage
            DISPLAY.value = 'Vous recevez : Oasis';
            oasisStock = oasisStock - 1;
        }
        else {
            // Modifier l'affichage
            DISPLAY.value = 'SOLD OUT';
        }
    }
    else {
        DISPLAY.value = 'Choix invalide';
    };
});