const tabSemaine = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi","dimanche"]



tabSemaine.forEach(function(jour, indice){
    if(indice < 5){
        console.log(`Jour N° ${indice + 1}, le ${jour}`)
    }
})
