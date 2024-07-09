const NUMBER_TABLE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0 ; i < NUMBER_TABLE.length ; i++) {
    if (NUMBER_TABLE[i] % 2 != 0) {
        continue
    };
    
    document.write(`${NUMBER_TABLE[i]} `);
};