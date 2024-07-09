const NUMBER_TABLE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// CONTINUE
for (let i = 0 ; i < NUMBER_TABLE.length ; i++) {
    // Si j'arrive au 5, je stop le if et je continue la suite (lecture clg) jusqu'à la fin de la boucle
    if (NUMBER_TABLE[i] === 5) {
        continue
    };

    console.log(NUMBER_TABLE[i]);
};
console.log('fin de la boucle');



// BREAK
console.log('*** BREAK ***');
for (let i = 0 ; i < NUMBER_TABLE.length ; i++) {
    // Si j'arrive au 5, je stop le if et je continue la suite (lecture clg) jusqu'à la fin de la boucle
    if (NUMBER_TABLE[i] === 3) {
        break
    };

    console.log(NUMBER_TABLE[i]);
    };
console.log('fin de la boucle');



// WHILE TRUE
console.log('*** WHILE TRUE ***');
while (true) {
    let mot = 'Veuillez entrer un mot : (quitter pour terminer) ';

    if (mot === 'quit') {
        break;
    };

    alert(mot.toUpperCase());
};