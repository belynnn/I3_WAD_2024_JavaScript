const DAY_OF_THE_WEEK = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

DAY_OF_THE_WEEK.forEach(function(day, index){
    if (index < 5) {
        console.log(`Jour n°${index+1}, le ${day}`);
    };
});