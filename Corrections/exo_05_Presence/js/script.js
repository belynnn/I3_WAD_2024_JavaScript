// const boutonPresence = document.getElementById("boutonPresence")
// const boutonAbsence = document.getElementById("boutonAbsence")
// const elementStatus = document.getElementById("status")

const boutonPresence = document.querySelectorAll("tbody tr")[0].children[3]
console.dir(boutonPresence);
const boutonAbsence = document.querySelectorAll("tbody tr")[0].children[4]
const elementStatus = document.querySelectorAll("tbody tr")[0].children[2]


boutonAbsence.addEventListener("click", MettreAbsent)
boutonPresence.addEventListener("click", MettrePresent)


function MettrePresent(){
    elementStatus.textContent = "Présent"
    boutonPresence.textContent = ""
    boutonAbsence.textContent = "🟥"
}

function MettreAbsent(){
    elementStatus.textContent = "Absent"
    boutonAbsence.textContent = ""
    boutonPresence.textContent = "✅"
}