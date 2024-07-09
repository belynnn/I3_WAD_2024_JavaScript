const MYSTERY_NUMBER = Math.floor(Math.random() * 10);

while (true) {
    let entryUser = parseInt(prompt('Veuillez entrer un nombre'));

    if (MYSTERY_NUMBER > entryUser) {
        alert('Le nombre mystère est plus grand.')
    } else if (MYSTERY_NUMBER < entryUser) {
        alert('Le nombre mystère est plus petit.')
    } else {
        break;
    };
};

console.log('GG!!');