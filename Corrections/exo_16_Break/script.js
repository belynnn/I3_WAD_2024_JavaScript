const NBR_MYSTERE = Math.floor(Math.random() * 100)

console.log(NBR_MYSTERE)

while(true){
    let nombreUtilisateur = parseInt(prompt("Entrer votre proposition : "))

    if(NBR_MYSTERE > nombreUtilisateur){
        alert("Le nombre mystère est plus grand !")
    }
    else if(NBR_MYSTERE < nombreUtilisateur){
        alert("Le nombre mystère est plus petit !")
    }
    else{
        break
    }
}   

alert("Bravo, le nombre mystère était bien " + NBR_MYSTERE)