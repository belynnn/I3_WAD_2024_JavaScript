const inputNom = document.querySelector("#inputNom");
const inputPrenom = document.getElementById("inputPrenom");
const inputAge = document.getElementById("inputAge");
const bouton = document.querySelector("button");

bouton.addEventListener("click", function(){
    const nomComplet = inputNom.value + " " + inputPrenom.value;
    const age = inputAge.valueAsNumber;
    const ageDansCinqAns = age + 5;
    alert("Bonjour "+ nomComplet+" vous avez "+age+" ans et dans cinq ans vous aurez "+ageDansCinqAns+ " ans");
});
