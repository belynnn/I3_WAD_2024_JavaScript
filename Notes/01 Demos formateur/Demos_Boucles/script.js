// const LOGIN = "johndoe@mail.com"
// const PASSWORD = "Test1234="


// const NBR_ESSAI = 3
// let compteur = 1

// let loginUtilisateur = prompt("essai N°"+ compteur + "\nVeuillez entrer votre login : ")
// let passwordUtilisateur = prompt("Veuillez entrer votre mot de passe : ")

// while((LOGIN !== loginUtilisateur || PASSWORD !== passwordUtilisateur) && compteur < NBR_ESSAI){
//     compteur++
//     alert("Le login ou le mot de passe est incorrecte")
//     loginUtilisateur = prompt("essai N°"+ compteur + "\nVeuillez entrer votre login : ")
//     passwordUtilisateur = prompt("Veuillez entrer votre mot de passe : ")
// }

// if(LOGIN !== loginUtilisateur || PASSWORD !== passwordUtilisateur){
//     alert("Vous ne pouvez pas vous connecter, contacter un administrateur !")
// }
// else{
//     alert("Bienvenue sur le site !")
// }



const NBR_MYSTERE = 42
let nbrUtilisateur = parseInt(prompt("Entrer votre proposition : "))

while(nbrUtilisateur != NBR_MYSTERE){
    if(NBR_MYSTERE > nbrUtilisateur){
        alert("Le nombre à trouver est plus grand !")
    }
    else{
        alert("Le nombre à trouver est plus petit !")
    }

    nbrUtilisateur = parseInt(prompt("Entrer votre nouvelle proposition : "))
}

alert("bravo, le nombre mystère était bien le " + NBR_MYSTERE)



