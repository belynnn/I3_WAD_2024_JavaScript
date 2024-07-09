// ELEVE 1
const boutonStatut = document.getElementById('boutonStatut');
const boutonPresence = document.getElementById('boutonPresence');
const boutonAbsence = document.getElementById('boutonAbsence');

// ELEVE 1
boutonPresence.addEventListener('click', function(){
    boutonStatut.textContent = "1";
    boutonAbsence.textContent = "🔳";
    boutonPresence.textContent = "✅";
})

boutonAbsence.addEventListener('click', function(){
    boutonStatut.textContent = "0";
    boutonAbsence.textContent = "❌";
    boutonPresence.textContent = "🔳";
})