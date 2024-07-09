// Création d'un élément HTML => createElement(tagName)
const h1 = document.createElement('h1');
const p = document.createElement('p');

// Paramétrer l'élément créé
h1.innerText = 'Coucou toi';
p.innerText = 'Comment ça va ?';
p.id = 'customParagraph';
h1.classList.add('uppercase');
h1.classList.add('bold', 'green');

// Paramètrer le comportement de l'élément
p.addEventListener('mouseenter', (event) => {
    toggleHighlight(event.target);
    event.target.style = 'font-weight: 900';
    // event.target.style.fontWeight = 'bold';
    event.target.style = 'font-size: 1.2em';
});
p.addEventListener('mouseleave', (event) => {
    toggleHighlight(event.target);
    event.target.style = 'font-weight: 400';
    // event.target.style.fontWeight = 'normal';
    event.target.style = 'font-size: 1em';
});

function toggleHighlight(target){
    target.classList.toggle('highlight');
};

// Insérer le p dans l'HTML
const wrapper = document.getElementById('wrapper');
wrapper.append(h1);
wrapper.append(p);



// Supprimer un élément
// element.remove() => supprimer l'élément
// parent.removeChild(element) => supprimer l'élément dans le parent
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const container = document.getElementById('container');

p1.remove();
container.removeChild(p2);

// Permet de récupérer le noeud parent
// (propriété) parentNode
const addButtons = document.querySelectorAll('.addBtn');

for (const button of addButtons) {

    button.addEventListener('click', (event) => {
        // Récupération de la ligne du produit
        const productRow = event.target.parentNode.parentNode;

        // Extraction des enfants de la ligne du produit
        console.log('productRow.children', productRow.children);
        const productName = productRow.children[0].innerText;
        const productPrice = productRow.children[1].innerText;
    });
};