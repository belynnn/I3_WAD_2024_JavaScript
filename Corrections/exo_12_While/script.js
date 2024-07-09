let nombreUtilisateur = parseInt(prompt("Veuillez entrer un nombre entre 1 et 10"))

while(nombreUtilisateur <1 || nombreUtilisateur > 10 || isNaN(nombreUtilisateur)){
    nombreUtilisateur = parseInt(prompt("Attention, le nombre doit être entre 1 et 10"))
}

alert("le nombre indiqué est " + nombreUtilisateur)