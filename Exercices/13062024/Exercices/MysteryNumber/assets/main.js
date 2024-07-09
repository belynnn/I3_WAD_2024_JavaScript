const MYSTERY_NUMBER = 3;

while (true) {
    let entryUser = parseInt(prompt('Veuillez entrer un nombre'));

    if (entryUser === MYSTERY_NUMBER) {
        break;
    };

    alert(`Vous avez entré : ${entryUser}\nVeuillez réessayer.`);
};

console.log('GG!!');