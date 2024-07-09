let nombre1 = parseFloat(prompt("Veuillez entrer un nombre : "))
let operateur = prompt("Veuillez entrer l'opérateur (+,-,/,*) : ")
let nombre2 = parseFloat(prompt("Veuillez entrer un nombre : "))
let resultat
let operationValide = true

if(!isNaN(nombre1) && !isNaN(nombre2)){

    switch(operateur){
        case "+" :
            resultat = nombre1 + nombre2
            break
        case "-" :
            resultat = nombre1 - nombre2
            break
        case "*" :
            resultat = nombre1 * nombre2
            break
        case "/" :
            if(nombre2 != 0){

                resultat = nombre1 / nombre2
            }
            else{
                alert("Division par zero impossible")
                operationValide = false
            }
            break
        default :
            alert("L'operateur est invalide")
            operationValide = false
            break
    }

    if(operationValide){

        alert(`${nombre1} ${operateur} ${nombre2} = ${resultat}`)
    }
}
else{
    alert("L'une des valeurs n'est pas un nombre")
}