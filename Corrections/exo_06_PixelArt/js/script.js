const Jaune = document.querySelector(".Jaune")
const Bleu = document.querySelector(".Bleu")
const case1 = document.querySelector("#canva tr td")

console.log(case1);


let couleurEnCours;

Jaune.addEventListener("click", function(){
    couleurEnCours = Jaune.textContent
    console.log(couleurEnCours);
})

Bleu.addEventListener("click", function(){
    couleurEnCours = Bleu.textContent
    console.log(couleurEnCours);
})

case1.addEventListener("click", function(){
    case1.classList.toggle(couleurEnCours)
})