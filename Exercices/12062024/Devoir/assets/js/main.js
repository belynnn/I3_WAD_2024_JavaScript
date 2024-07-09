// Créer un distributeur de boisson en JS en utilisant le Switch et le If / Else

// L'utilisateur doit pouvoir choisir sa boisson 

// (1) Eau
// (2) Coca-Cola
// (3) Sprite
// (4) Oasis

// Lorsque l'utilisateur fait une sélection correcte il faut vérifier le stock de cette boisson, fournir la cannette
// à condition qu'elle soit disponible et décrémenter le stock. Dans le cas ou il n'y a plus de stock pour cette boisson,
// indiquer 'Sold out'

// /!\ Il faut indiquer à l'utilisateur si son choix est invalide.

let eauStock = 0;
let eauPrice = 1.00;
let cocaStock = 5;
let cocaPrice = 1.50;
let spriteStock = 10;
let spritePrice = 1.75;
let oasisStock = 3;
let oasisPrice = 1.30;

console.log(`Stock Eau : ${eauStock}`);
console.log(`Stock Coca : ${cocaStock}`);
console.log(`Stock Sprite : ${spriteStock}`);
console.log(`Stock Oasis : ${oasisStock}`);

let userEntry = prompt('Veuillez sélectionner une boisson :\n• [1] Eau 1.00€\n• [2] Coca 1.50€\n• [3] Sprite 1.75€\n• [4] Oasis 1.30€');

switch (userEntry) {
    case "1" : 
        if (eauStock > 0) {
            console.log('********************');
            console.log(`Veuillez insérer ${eauPrice}€`)
            eauStock -= 1;
        }
        else {
            console.log('Sold out');
        };
        break;

    case "2" :
        if (cocaStock > 0) {
            console.log('********************');
            console.log(`Veuillez insérer ${cocaPrice}€`)
            cocaStock -= 1;
        }
        else {
            console.log('Sold out');
        };
        break;

    case "3" :
        if (spriteStock > 0) {
            console.log('********************');
            console.log(`Veuillez insérer ${spritePrice}€`)
            spriteStock -= 1;
        }
        else {
            console.log('Sold out');
        };
        break;

    case "4" :
        if (oasisStock > 0) {
            console.log('********************');
            console.log(`Veuillez insérer ${oasisPrice}€`)
            oasisStock -= 1;
        }
        else {
            console.log('Sold out');
        };
        break;

    default:
        console.log("Le produit sélectionné n'est pas disponible. Veuillez sélectionner une autre boisson.");

        break;
};

console.log(`Stock Eau : ${eauStock}`);
console.log(`Stock Coca : ${cocaStock}`);
console.log(`Stock Sprite : ${spriteStock}`);
console.log(`Stock Oasis : ${oasisStock}`);