// Récupérer les node list des boutons de présence et absence
const BTN_PRESENT = document.querySelectorAll('.btnPresent');
const BTN_ABSENT = document.querySelectorAll('.btnAbsent');

// Parcourir les node list
for (let i = 0 ; i < BTN_PRESENT.length ; i++) {
    // Au click, afficher '🟢'
    BTN_PRESENT[i].addEventListener('click', function() {
        BTN_PRESENT[i].previousElementSibling.textContent = 'Present';
        BTN_PRESENT[i].textContent = '🟢';
        BTN_PRESENT[i].nextElementSibling.textContent = '';
    });

    // En partant des éléments précédents
    // // Au click, afficher '🔴'
    // BTN_ABSENT[i].addEventListener('click', function() {
    //     BTN_ABSENT[i].previousElementSibling.previousElementSibling.textContent = 'Absent';
    //     BTN_ABSENT[i].textContent = '🔴';
    //     BTN_ABSENT[i].previousElementSibling.textContent = '';
    // });

    // En partant du parent "<tr>"
    // Au click, afficher '🔴'
    BTN_ABSENT[i].addEventListener('click', function() {
        BTN_ABSENT[i].parentElement.children[1].textContent = 'Absent';
        BTN_ABSENT[i].textContent = '🔴';
        BTN_ABSENT[i].previousElementSibling.textContent = '';
    });
};