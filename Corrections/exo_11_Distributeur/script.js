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

let stockEau = 3
let stockCoca = 2
let stockSprite = 0
let stockOasis = 1
let reacheter

do{

    let choix = prompt("Bonjour Veuillez selectionner une boisson :\n1. Eau\n2. Coca-Cola\n3. Sprite\n4. Oasis")

    switch(choix){
        case "1":
            if(stockEau > 0){
                alert("Voici votre bouteille d'eau")
                stockEau = stockEau - 1
            }
            else{
                alert("Sold Out")
            }
            break
        case "2":
            if(stockCoca > 0){
                alert("Voici votre bouteille de Coca-Cola")
                stockCoca = stockCoca - 1
            }
            else{
                alert("Sold Out")
            }
            break
        case "3":
            if(stockSprite > 0){
                alert("Voici votre votre bouteille de Sprite ")
                stockSprite = stockSprite - 1
            }
            else{
                alert("Sold Out")
            }
            break
        case "4":
            if(stockOasis > 0){
                alert("Voici votre bouteille d'Oasis'")
                stockOasis = stockOasis - 1
            }
            else{
                alert("Sold Out")
            }
            break
        default:
            alert("Choix non valide !")
            break
    }

    console.log("stockCoca ", stockCoca)
    console.log("stockSprite ", stockSprite)
    console.log("stockEau ", stockEau)
    console.log("stockOasis ", stockOasis)

    reacheter = prompt("Voulez-vous une autre boisson ? oui - non")

}while(reacheter === "oui" )