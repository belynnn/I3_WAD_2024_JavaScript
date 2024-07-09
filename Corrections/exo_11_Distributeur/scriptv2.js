const DISPLAY = document.getElementById("display")
const BOUTON = document.getElementById("acheter")
// Les choix
const COCA = document.getElementById("coca")
const EAU = document.getElementById("eau")
const SPRITE = document.getElementById("sprite")
const OASIS = document.getElementById("oasis")

// Stock

let stockEau = 3
let stockCoca = 2
let stockSprite = 0
let stockOasis = 1

// Ajout d'une gestion d'evenement sur base d'un click
BOUTON.addEventListener("click",function(){
    if(COCA.checked){
        if(stockCoca > 0){
            DISPLAY.value = "Vous recevez : Coca-Cola"
            stockCoca--
        }
        else{
            DISPLAY.value = "Sold Out !"
        }
    }

    else if(EAU.checked){
        if(stockEau > 0){
            DISPLAY.value = "Vous recevez : Eau"
            stockEau--
        }
        else{
            DISPLAY.value = "Sold Out !"
        }
    }

    else if(SPRITE.checked){
        if(stockSprite > 0){
            DISPLAY.value = "Vous recevez : Sprite"
            stockSprite--
        }
        else{
            DISPLAY.value = "Sold Out !"
        }
    }

    else if(OASIS.checked){
        if(stockOasis > 0){
            DISPLAY.value = "Vous recevez : Oasis"
            stockOasis--
        }
        else{
            DISPLAY.value = "Sold Out !"
        }
    }

    else{
        DISPLAY.value = "Choix Invalide"
    }

})

