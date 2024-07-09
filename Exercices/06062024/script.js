const couleurJaune = document.querySelector(".jaune");
const couleurBleu = document.querySelector(".bleu");
const case1 = document.querySelector("");

let appliquerCouleur;

couleurJaune.addEventListener('click', function(){
    appliquerCouleur = couleurJaune.textContent
    console.log(appliquerCouleur)
})

couleurBleu.addEventListener('click', function(){
    appliquerCouleur = couleurBleu.textContent
    console.log(appliquerCouleur)
})