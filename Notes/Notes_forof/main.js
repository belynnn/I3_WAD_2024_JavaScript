const ARRAY_DAY_OF_THE_WEEK = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const TABLE_OF_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Afficher les jours de la semaine
for (const DAY_ELEMENT of ARRAY_DAY_OF_THE_WEEK) {
    console.log(DAY_ELEMENT);
};

// Afficher les nombres paires
for (const NUMBER of TABLE_OF_NUMBER) {
    if (NUMBER % 2 !== 0) {
        continue;
    };

    console.log(NUMBER);
};

// Afficher les nombres ET modifier la valeur des nombres impaires
// ATTENTION : let modifie les valeurs internes à la liste
for (let number of TABLE_OF_NUMBER) {
    if (number % 2 !== 0) {
        number = 'impaire'
    };

    console.log(number);
};