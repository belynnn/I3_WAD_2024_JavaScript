let maVariable = 5;
maVariable = "cinq";

// ! Number
let varNumber = 5;
varNumber = 5_555;
varNumber = 400_00_00_00;
varNumber = 5.6469;
varNumber = 5e6; // 5 000 000
varNumber = 0xF; // 16 hexadecimal
varNumber = 0b1101; // binaire = 13
varNumber = 0o71; // octal: base 8 = 57

const input = prompt("Veuillez entrer un nombre");
console.log(typeof input);
console.log(input+10);
console.log(parseInt(input)+10); // arrondi les nombres à virgule vers le bas : 1.7 = 1
console.log(parseFloat(input)+0.5);

const val = parseInt("F", 16);


const a = 7;
const b = 5;

resultAddition = a + b;
resultSoustraction = a - b;
resultMultiplication = a * b;
resultDivision = a / b;
resultDivision = Math.floor(a / b); // division entière
resultModulo = a % b;
resultPuissance = a ** b;

console.log(resultAddition);
console.log(resultSoustraction);
console.log(resultMultiplication);
console.log(resultDivision);
console.log(resultModulo);
console.log(resultPuissance);


result = 0;

console.log(result++); // 1 - 0 - récupére la valeur puis incrémente
console.log(++result); // 2 - 2 - incrémenter la valeur puis récupère la valeur
console.log(result--); // 1 - 2 - récupére la valeur puis décrémente
console.log(--result); // 0 - 0 - décrémente puis récupère la valeur
console.log(result); // 

result = result + 5;
result += 5;

result = result - 5;
result -= 5;

result = result * 5;
result *= 5;

result = result / 5;
result /= 5;

result = result % 5;
result %= 5;

result = result ** 5;
result **= 5;