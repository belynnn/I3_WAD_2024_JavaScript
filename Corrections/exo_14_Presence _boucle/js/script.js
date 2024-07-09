const BOUTONS_PRESENCE = document.querySelectorAll(".boutonPresence")
const BOUTONS_ABSENCE = document.querySelectorAll(".boutonAbsence")

for(let i = 0; i < BOUTONS_PRESENCE.length; i++){
    BOUTONS_PRESENCE[i].addEventListener("click", function(){
        BOUTONS_PRESENCE[i].previousElementSibling.textContent = "Présent"
        BOUTONS_PRESENCE[i].textContent = ""
        BOUTONS_PRESENCE[i].nextElementSibling.textContent = "🟥"
    })

    // BOUTONS_ABSENCE[i].addEventListener("click", function(){
    //     BOUTONS_ABSENCE[i].previousElementSibling.previousElementSibling.textContent = "Absent"
    //     BOUTONS_ABSENCE[i].textContent = ""
    //     BOUTONS_ABSENCE[i].previousElementSibling.textContent = "✅"

    BOUTONS_ABSENCE[i].addEventListener("click", function(){
        BOUTONS_ABSENCE[i].parentElement.children[2].textContent = "Absent"
        BOUTONS_ABSENCE[i].textContent = ""
        BOUTONS_ABSENCE[i].previousElementSibling.textContent = "✅"
    })
}