// Les types
const vNumber = 5; // number
const vString = 'chaine'; // string
const vBoolean = true; // boolean
const vUndefined = undefined; // undefined
const vObject1 = {
    age: 14,
    nom: 'luc'
}; // object
const vObject2 = [1,2,3, true, 'salut', undefined]; // object
const vObject3 = new Date(); // object
const vObject4 = null; // object
const vFunction = function(){} // function

const p1 = {
    prenom: 'marie',
    age: 41,
    emploi: 'developpeuse'
}

const p2 = {
    prenom: 'marc',
    age: 3,
    emploi: null
}


let maVariable = 5
maVariable = 'chaine'

// Number
let varNumber = 5;
varNumber = 5_555;
varNumber = 5.6469;
varNumber = 5e6;
varNumber = 0xF; // hexadecimal // 15
varNumber = 0b1111; // binaire // 1 + 2 + 4 + 8 = 15
varNumber = 0o17; // octal: base 8 // 7 + 8 = 15

const input = prompt('Veuillez entrer un nombre')
console.log(typeof input)
console.log(parseInt(input) + 10); // parseInt arrondi les nombres à virgule vers le bas
console.log(parseFloat(input) + 10) // n'arrondi pas

const val = parseInt("F", 16)
console.log(val)

const a = 7, b = 5;
let rslt;

rslt = a + b; // 12
rslt = a - b; // 2
rslt = a * b; // 35
rslt = a / b; // 1.4
rslt = Math.floor( a / b ); // 1 // division entière
rslt = a % b; // 2
rslt = a ** b; // 16_807

rslt = 0; // 0

rslt = rslt + 5
rslt += 5 
rslt = rslt - 5
rslt -= 5
rslt = rslt * 5
rslt *= 5
rslt = rslt / 5
rslt /= 5
rslt = rslt % 5
rslt %= 5
rslt = rslt ** 5
rslt **= 5


rslt = rslt + 1
rslt += 1
++rslt

rslt = rslt - 1
rslt -= 1
--rslt

// Ici l'expression 'rslt++' vaut la valeur d'avant incrémentation et incrémente la variable
console.log( rslt++ ); 
// affiche 0
// rslt vaut 1
// Ici l'expression '++rslt' vaut la valeur d'après incrémentation et incrémente la variable
console.log( ++rslt ); 
// affiche 2
// rslt vaut 2
// Ici l'expression 'rslt--' vaut la valeur d'avant décrémentation et décrémente la variable
console.log( rslt-- ); 
// affiche 2
// rslt vaut 1
// Ici l'expression '--rslt' vaut la valeur d'après décrémentation et décrémente la variable
console.log( --rslt ); 
// affiche 0
// rslt vaut 0

console.log( rslt ); // 0


// Quelques constantes

Number.NaN // NaN
Math.PI


Number.MAX_VALUE
Number.MIN_VALUE

Number.NEGATIVE_INFINITY

Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER 

// Gérer le NaN
const aParser1 = '5'
const nePeutPasEtreParse1 = isNaN(aParser1) // false
const valeur1 = parseInt(aParser1) // 5

const aParser2 = 'salut'
const nePeutPasEtreParse2 = isNaN(aParser2) // true
const valeur2 = parseInt(aParser2) // NaN

// Quelques fonctions

const v1 = 6, v2 = 4.5, v3 = Infinity, v4 = NaN
console.log( Number.isInteger(v1) ) // true
console.log( Number.isInteger(v2) ) // false
console.log( Number.isInteger(v3) ) // false
console.log( Number.isInteger(v4) ) // false


console.log( Number.isFinite(v1) ) // true
console.log( Number.isFinite(v2) ) // true
console.log( Number.isFinite(v3) ) // false
console.log( Number.isFinite(v4) ) // false

// String
let chaine = "ma chaine de 'caractère'"
chaine = 'ma chaine de "caractère"'

// Quelques fonctions

console.log( chaine.length ) // Recupère la taille
console.log( chaine.charAt(1) ) // 'a'
// Récupère une sous chaine de caractère dans un interval de position (end exclu)
console.log( chaine.substring( 3, 9 ) ) // 'chaine'
console.log( chaine.split(' ') ) // ['ma','chaine','de', '"caractère"']

const mots = chaine.split(' ')
console.log( chaine.indexOf( mots[0] ) ) // 0
console.log( chaine.indexOf( mots[1] ) ) // 3
console.log( chaine.indexOf( mots[2] ) ) // 10
console.log( chaine.indexOf( mots[3] ) ) // 13

// Tableaux
let tab = []
tab = new Array()

tab = [ 'valeur', 1, true ]
tab = new Array('valeur', 1, true)

// Quelques fonctions
console.log(tab.length) // 3

// ajouter
tab.push('ajouté à la fin')
tab.unshift('ajouté au début')

// supprimer
const dernierElement = tab.pop()
const premierElement = tab.shift()

// récupérer un élément
const deuxieme = tab[1];
// const douzieme = tab[11];  // => undefined

// modifier une case
tab[2] = 62
tab[11] = 90 // fait semblant qu'il existe des case vide entre la position 2 et 11 (=> undefined)

// supprimer un certain nombre d'éléments à partir d'un index, 
// en les remplacant par d'autres
const indexDepart = 0
const nombreSupprime = 1
const remplacement1 = 2, remplacement2 = 'salut', remplacement3 = 'troisieme'
tab.splice( indexDepart, nombreSupprime, remplacement1, remplacement2, remplacement3)

// Join
// Transforme le tableau en string en joignant les valeurs par un separateur (',' par defaut)
console.log( [1,2,3].join() ) // '1,2,3'
console.log( [1,2,3].join('') ) // '123'
// C'est la fonction opposée à string.split(...)
console.log( [1,2,3].join('').split('') ) // => '123' =>  ['1','2','3']
console.log( [1,2,3].join(',').split(',') ) // => '1,2,3' =>  ['1','2','3']

// Reverse
// inverse l'ordre des éléments

// Date
const now = new Date();
const janv1900 = new Date(1900,0,1,12,30,2,999);
const formate = new Date('2020-01-01');
const timestamp = new Date(1717770011000);

console.log( now.getFullYear() )
console.log( now.getMonth() )
console.log( now.getDate() )
console.log( now.getHours() )
console.log( now.getMinutes() )
console.log( now.getseconds() )
console.log( now.getMilliseconds() )

console.log( now.getTime() )
