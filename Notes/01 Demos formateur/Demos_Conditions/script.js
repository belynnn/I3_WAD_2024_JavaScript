/////////// LOGIN /////////

const login = "johndoe@mail.com"
const password = "Test1234="

let loginUtilisateur = prompt("Veuillez entrer votre login : ")
let passwordUtilisateur = prompt("Veuillez entrer votre password : ")

if(login === loginUtilisateur && password === passwordUtilisateur){
    alert("Bienvenue sur le site !")
}
else {
    alert("Le login ou le mot de passe est invalide")
}


////////////// VERIFICATION SUR l'AGE ///////////


let age = parseInt(prompt("Veuillez entrer votre age : "));
console.log(age)

if(!isNaN(age)){
    if(age > 0 && age <= 25){
        console.log("vous êtes un étudiant")
    }
    else if(age > 25 && age < 67){
        console.log("vous êtes un travailleur")
    }
    else if(age >= 67){
        console.log("vous êtes à la retraite")
    }
    else{
        console.log("age invalide")
    }
}
else{
    console.log("Veuillez entrer un nombre")
}
//// APPROCHE V2

if(!isNaN(age)){
    if(age > 66){
        console.log("vous êtes à la retraite")
    }
    else if(age > 25){
        console.log("vous êtes un travailleur")
    }
    else if(age > 0 ){
        console.log("vous êtes un étudiant")
    }
    else{
        console.log("age invalide")
    }
}
else{
    console.log("Veuillez entrer un nombre")
}



