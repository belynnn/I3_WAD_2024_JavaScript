const jaune = document.querySelector(".jaune")
const bleu = document.querySelector(".bleu")

let couleurEnCours;

jaune.addEventListener("click", function(){
    couleurEnCours = jaune.textContent
    console.log(couleurEnCours);
})

bleu.addEventListener("click", function(){
    couleurEnCours = bleu.textContent
    console.log(couleurEnCours);
})

// ! LIGNE 1
const tdCase1 = document.querySelector("#canva tr:nth-child(1) td:nth-child(1)")
const tdCase2 = document.querySelector("#canva tr:nth-child(1) td:nth-child(2)")
const tdCase3 = document.querySelector("#canva tr:nth-child(1) td:nth-child(3)")
const tdCase4 = document.querySelector("#canva tr:nth-child(1) td:nth-child(4)")

// ! LIGNE 2
const tdCase5 = document.querySelector("#canva tr:nth-child(2) td:nth-child(1)")
const tdCase6 = document.querySelector("#canva tr:nth-child(2) td:nth-child(2)")
const tdCase7 = document.querySelector("#canva tr:nth-child(2) td:nth-child(3)")
const tdCase8 = document.querySelector("#canva tr:nth-child(2) td:nth-child(4)")

// ! LIGNE 3
const tdCase9 = document.querySelector("#canva tr:nth-child(3) td:nth-child(1)")
const tdCase10 = document.querySelector("#canva tr:nth-child(3) td:nth-child(2)")
const tdCase11 = document.querySelector("#canva tr:nth-child(3) td:nth-child(3)")
const tdCase12 = document.querySelector("#canva tr:nth-child(3) td:nth-child(4)")

// ! LIGNE 4
const tdCase13 = document.querySelector("#canva tr:nth-child(4) td:nth-child(1)")
const tdCase14 = document.querySelector("#canva tr:nth-child(4) td:nth-child(2)")
const tdCase15 = document.querySelector("#canva tr:nth-child(4) td:nth-child(3)")
const tdCase16 = document.querySelector("#canva tr:nth-child(4) td:nth-child(4)")



// ! LIGNE 1
tdCase1.addEventListener("click", function(){
    tdCase1.classList.toggle(couleurEnCours)
    if (tdCase1.className == "jaune" && couleurEnCours == "bleu") {
        tdCase1.classList.remove("jaune")
        tdCase1.classList.add("bleu")
    } else if (tdCase1.className == "bleu" && couleurEnCours == "jaune") {
        tdCase1.classList.remove("bleu")
        tdCase1.classList.add("jaune")
    }
})
tdCase2.addEventListener("click", function(){
    tdCase2.classList.toggle(couleurEnCours)
    if (tdCase2.className == "jaune" && couleurEnCours == "bleu") {
        tdCase2.classList.remove("jaune")
        tdCase2.classList.add("bleu")
    } else if (tdCase2.className == "bleu" && couleurEnCours == "jaune") {
        tdCase2.classList.remove("bleu")
        tdCase2.classList.add("jaune")
    }
})
tdCase3.addEventListener("click", function(){
    tdCase3.classList.toggle(couleurEnCours)
    if (tdCase3.className == "jaune" && couleurEnCours == "bleu") {
        tdCase3.classList.remove("jaune")
        tdCase3.classList.add("bleu")
    } else if (tdCase3.className == "bleu" && couleurEnCours == "jaune") {
        tdCase3.classList.remove("bleu")
        tdCase3.classList.add("jaune")
    }
})
tdCase4.addEventListener("click", function(){
    tdCase4.classList.toggle(couleurEnCours)
    if (tdCase4.className == "jaune" && couleurEnCours == "bleu") {
        tdCase4.classList.remove("jaune")
        tdCase4.classList.add("bleu")
    } else if (tdCase4.className == "bleu" && couleurEnCours == "jaune") {
        tdCase4.classList.remove("bleu")
        tdCase4.classList.add("jaune")
    }
})

// ! LIGNE 2
tdCase5.addEventListener("click", function(){
    tdCase5.classList.toggle(couleurEnCours)
    if (tdCase5.className == "jaune" && couleurEnCours == "bleu") {
        tdCase5.classList.remove("jaune")
        tdCase5.classList.add("bleu")
    } else if (tdCase5.className == "bleu" && couleurEnCours == "jaune") {
        tdCase5.classList.remove("bleu")
        tdCase5.classList.add("jaune")
    }
})
tdCase6.addEventListener("click", function(){
    tdCase6.classList.toggle(couleurEnCours)
    if (tdCase6.className == "jaune" && couleurEnCours == "bleu") {
        tdCase6.classList.remove("jaune")
        tdCase6.classList.add("bleu")
    } else if (tdCase6.className == "bleu" && couleurEnCours == "jaune") {
        tdCase6.classList.remove("bleu")
        tdCase6.classList.add("jaune")
    }
})
tdCase7.addEventListener("click", function(){
    tdCase7.classList.toggle(couleurEnCours)
    if (tdCase7.className == "jaune" && couleurEnCours == "bleu") {
        tdCase7.classList.remove("jaune")
        tdCase7.classList.add("bleu")
    } else if (tdCase7.className == "bleu" && couleurEnCours == "jaune") {
        tdCase7.classList.remove("bleu")
        tdCase7.classList.add("jaune")
    }
})
tdCase8.addEventListener("click", function(){
    tdCase8.classList.toggle(couleurEnCours)
    if (tdCase8.className == "jaune" && couleurEnCours == "bleu") {
        tdCase8.classList.remove("jaune")
        tdCase8.classList.add("bleu")
    } else if (tdCase8.className == "bleu" && couleurEnCours == "jaune") {
        tdCase8.classList.remove("bleu")
        tdCase8.classList.add("jaune")
    }
})

// ! LIGNE 3
tdCase9.addEventListener("click", function(){
    tdCase9.classList.toggle(couleurEnCours)
    if (tdCase9.className == "jaune" && couleurEnCours == "bleu") {
        tdCase9.classList.remove("jaune")
        tdCase9.classList.add("bleu")
    } else if (tdCase9.className == "bleu" && couleurEnCours == "jaune") {
        tdCase9.classList.remove("bleu")
        tdCase9.classList.add("jaune")
    }
})
tdCase10.addEventListener("click", function(){
    tdCase10.classList.toggle(couleurEnCours)
    if (tdCase10.className == "jaune" && couleurEnCours == "bleu") {
        tdCase10.classList.remove("jaune")
        tdCase10.classList.add("bleu")
    } else if (tdCase10.className == "bleu" && couleurEnCours == "jaune") {
        tdCase10.classList.remove("bleu")
        tdCase10.classList.add("jaune")
    }
})
tdCase11.addEventListener("click", function(){
    tdCase11.classList.toggle(couleurEnCours)
    if (tdCase11.className == "jaune" && couleurEnCours == "bleu") {
        tdCase11.classList.remove("jaune")
        tdCase11.classList.add("bleu")
    } else if (tdCase11.className == "bleu" && couleurEnCours == "jaune") {
        tdCase11.classList.remove("bleu")
        tdCase11.classList.add("jaune")
    }
})
tdCase12.addEventListener("click", function(){
    tdCase12.classList.toggle(couleurEnCours)
    if (tdCase12.className == "jaune" && couleurEnCours == "bleu") {
        tdCase12.classList.remove("jaune")
        tdCase12.classList.add("bleu")
    } else if (tdCase12.className == "bleu" && couleurEnCours == "jaune") {
        tdCase12.classList.remove("bleu")
        tdCase12.classList.add("jaune")
    }
})

// ! LIGNE 4
tdCase13.addEventListener("click", function(){
    tdCase13.classList.toggle(couleurEnCours)
    if (tdCase13.className == "jaune" && couleurEnCours == "bleu") {
        tdCase13.classList.remove("jaune")
        tdCase13.classList.add("bleu")
    } else if (tdCase13.className == "bleu" && couleurEnCours == "jaune") {
        tdCase13.classList.remove("bleu")
        tdCase13.classList.add("jaune")
    }
})
tdCase14.addEventListener("click", function(){
    tdCase14.classList.toggle(couleurEnCours)
    if (tdCase14.className == "jaune" && couleurEnCours == "bleu") {
        tdCase14.classList.remove("jaune")
        tdCase14.classList.add("bleu")
    } else if (tdCase1.className == "bleu" && couleurEnCours == "jaune") {
        tdCase14.classList.remove("bleu")
        tdCase14.classList.add("jaune")
    }
})
tdCase15.addEventListener("click", function(){
    tdCase15.classList.toggle(couleurEnCours)
    if (tdCase15.className == "jaune" && couleurEnCours == "bleu") {
        tdCase15.classList.remove("jaune")
        tdCase15.classList.add("bleu")
    } else if (tdCase15.className == "bleu" && couleurEnCours == "jaune") {
        tdCase15.classList.remove("bleu")
        tdCase15.classList.add("jaune")
    }
})
tdCase16.addEventListener("click", function(){
    tdCase16.classList.toggle(couleurEnCours)
    if (tdCase16.className == "jaune" && couleurEnCours == "bleu") {
        tdCase16.classList.remove("jaune")
        tdCase16.classList.add("bleu")
    } else if (tdCase16.className == "bleu" && couleurEnCours == "jaune") {
        tdCase16.classList.remove("bleu")
        tdCase16.classList.add("jaune")
    }
})