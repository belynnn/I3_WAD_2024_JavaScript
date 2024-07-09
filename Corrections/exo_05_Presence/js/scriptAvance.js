const boutonOK = document.querySelectorAll("tbody tr")

console.log(boutonOK);

boutonOK.forEach(element => {
    element.children[3].addEventListener("click",function($event){
        const status = $event.target.previousElementSibling;
        $event.target.nextElementSibling.textContent = "🟥";
        $event.target.textContent = "";
        status.textContent = "Présent";
    });
});

boutonOK.forEach(element => {
    element.children[4].addEventListener("click",function($event){
        const status = $event.target.previousElementSibling.previousElementSibling;
        $event.target.previousElementSibling.textContent = "✅";
        $event.target.textContent = "";
        status.textContent = "Absent";
    });
});