let nombre = 5
console.log('nombre = 5')
// comparaison sur l'égalité
console.log('nombre == 5' , nombre == 5) // True
console.log('nombre == "5"' ,nombre == "5") // True

// comparaison sur l'égalité, sur la valeur et le type
console.log('nombre === "5"', nombre === "5") // False
console.log('nombre === 5', nombre === 5) // True

let nombreAVerifier = parseInt(prompt("Veuillez entrer un nombre"))
console.log('nombre == nombreAVerifier', nombre == nombreAVerifier)
console.log('nombre === nombreAVerifier', nombre === nombreAVerifier)

// comparer si c'est différent
console.log('nombre != 5',nombre != 5 ) // false
console.log('nombre != 6',nombre != 6 ) // true

console.log('"Hello World" == "Hello World"',"Hello World" == "Hello World") // True
console.log('"Hello World" == "Hello Word"',"Hello World" == "Hello Word") // False
console.log('"Hello World" == "Hello WorlD"',"Hello World" == "Hello WorlD") // False

// operateurs de comparaison

console.log('nombre > 6' , nombre > 6) // false
console.log('nombre < 6' , nombre < 6) // true

console.log('nombre >= 6' , nombre >= 6) // false
console.log('nombre >= 5' , nombre >= 5) // true
