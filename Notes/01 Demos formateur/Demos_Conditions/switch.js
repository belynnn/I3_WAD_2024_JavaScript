let choix = prompt("Veuillez selectionner le fruit que vous souhaité acheter : pomme , poire, kiwi, mangue")

let stockPoire = 2

// if(choix === "pomme")
// else if(choix === "poire")
// else if( choix === "kiwi" || choix === "mangue")


switch(choix){
    case "pomme" : 
        console.log("le prix est de 1€/kg")
        break
    case "poire" :
        if(stockPoire > 0){
            console.log("le prix est 1.10€/kg")
        }
        else{
            console.log("Il n'y a plus de stock")
        }
        break
    case "kiwi" :
    case "mangue" :
        console.log("le prix est 4.20€/kg")
        break
    default:
        console.log("Le fruit n'est pas disponnible")
        break
}
