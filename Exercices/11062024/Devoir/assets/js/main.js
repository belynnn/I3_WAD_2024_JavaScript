// ! Aller chercher la valeur encoder dans le HTML, via l'id-selecteur CSS et la mettre dans une variable
const phrase = document.querySelector('#phrase');

// ! Capter le contenu texte de la valeur, via le DOM
const textPhrase = phrase.textContent;



// ? ----------------------------------------------
// ? Retourner la position de ' ma '
// ? ----------------------------------------------
// ! Capter la position de la chaîne de caractères ' ma '
const positionStringMa = textPhrase.indexOf('ma');

// ! Message console pour afficher la position de la chaîne de caractères ' ma '
console.log(`🤗 position ' ma '  ->  ${positionStringMa}`);

// ! Ajouter la position de la chaîne de caractères ' ma ' dans le document HTML
let responsePositionStringMa = document.querySelector('ol li:nth-child(1)>p');
responsePositionStringMa.innerHTML = `La position de la chaîne de caractères ' ma ' est : <span>${positionStringMa}</span>`;



// ? ----------------------------------------------
// ? Indiquer l'indice de la lettre ' p '
// ? ----------------------------------------------
// ! Capter l'indice de la lettre ' p '
const positionLetterP = textPhrase.indexOf('p');

// ! Message console pour afficher l'indice de la lettre ' p '
console.log(`🤗 indice ' p '  ->  ${positionLetterP}`);

// ! Ajouter l'indice de la lettre ' p ' dans le document HTML
let responsePositionLetterP = document.querySelector('ol li:nth-child(2)>p');
responsePositionLetterP.innerHTML = `L'indice de la lettre ' p ' est : <span>${positionLetterP}</span>`;



// ? ----------------------------------------------
// ? Retrouver la lettre située à l'indice 21
// ? ----------------------------------------------
// ! Capter la lettre située à l'indice 21
const letterIndex21 = textPhrase[21];

// ! Message console pour afficher la lettre située à l'indice 21
console.log(`🤗 indice 21  ->  ' ${letterIndex21} '`);

// ! Ajouter la lettre située à l'indice 21 dans le document HTML
let responseLetterIndex21 = document.querySelector('ol li:nth-child(3)>p');
responseLetterIndex21.innerHTML = `La lettre située à l'indice 21 est : <span>${letterIndex21}</span>`;



// ? ----------------------------------------------
// ? Remplacer ' javascript ' par ' Java '
// ? ----------------------------------------------
// ! Vérifier si la chaîne de caractères ' textPhrase ' contient bien la chaîne de caractères ' javascript '
if (textPhrase.includes('javascript') == true) {
    // ! SI OUI, remplacer la chaîne de caractères ' javascript ' par ' Java '
    let textPhraseReplaceJavascriptToJava = textPhrase.replace('javascript', 'Java');

    // ! Message console pour afficher la chaîne de caractères ' textPhrase ' et la nouvelle chaîne de caractères (avec Java) ' textPhraseReplaceToJava '
    console.log(`🤗 remplacer ' javascript ' par ' Java '  ->  ' ${textPhrase} / ${textPhraseReplaceJavascriptToJava} '`);

    // ! Ajouter la lettre située à l'indice 21 dans le document HTML
    let responseLetterReplaceJavascriptToJava = document.querySelector('ol li:nth-child(4)>p');
    responseLetterReplaceJavascriptToJava.innerHTML = `La chaîne de caractères contenant ' Java ' : <span>${textPhraseReplaceJavascriptToJava}</span>`;
};



// ? ---------------------------------------------------
// ? Découper la chaîne avec le délimiteur ' ' (espace)
// ? ---------------------------------------------------
// ! Récupérer chaque mots de la chaîne de caractères
const tableTextPhrase = textPhrase.split(' ');

// ! Message console pour afficher la liste créer par la découpe de la chaîne de caractères
console.log(`🤗 liste de découpe  ->  ${tableTextPhrase}`);

// ! Ajouter la lettre située à l'indice 21 dans le document HTML
let responseSplit = document.querySelector('ol li:nth-child(5)>p');
responseSplit.innerHTML = `La chaîne de caractères découpée par espace : <span>${tableTextPhrase}</span>`;



// ? ---------------------------------------------------
// ? Inverser la chaîne de caractères ' ma formation javascript ' par ' tpircsavaj noitamrof am '
// ? ---------------------------------------------------
// ! Séparer chaque caractère de la chaîne de caractères ' ma formation javascript '
const tableTextPhraseLetters = textPhrase.split('');

// ! Inverser l'ordre des caractères de la chaîne de caractères ' ma formation javascript '
const reversedTableTextPhrase = tableTextPhraseLetters.reverse();

// ! Rejoindre les caractères ensemble pour reformer la chaîne de caractères en ' tpircsavaj noitamrof am '
const joinReversedTableTextPhrase = reversedTableTextPhrase.join('');
console.log(`🤗 chaîne inversée  ->  ${joinReversedTableTextPhrase}`);

// ! Ajouter la chaîne de caractères inversés dans le document HTML
let responseReverse = document.querySelector('ol li:nth-child(6)>p');
responseReverse.innerHTML = `La chaîne de caractères inversée : <span>${joinReversedTableTextPhrase}</span>`;