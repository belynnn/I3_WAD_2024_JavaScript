const couleurs = document.querySelectorAll("#couleurs tr td")
const cases = document.querySelectorAll("#canva tr td")

let couleurEnCours;


for(let i = 0 ; i < couleurs.length; i++){
    couleurs[i].addEventListener("click", function(){
        couleurEnCours = couleurs[i].className
    })
}


for(let i = 0; i < cases.length; i++){
    cases[i].addEventListener("click", function(){
        cases[i].className = couleurEnCours
    })
}
