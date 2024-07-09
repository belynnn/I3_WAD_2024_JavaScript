const A = 3
const B = 9
const C = true
const D = false
const E = "4"
const F = "3"

//1
console.log(A === 3) // True

//2
console.log(A === F) // False

//3
console.log(A < B) // True

//4
console.log(C) // True

//5
console.log(E > F) // True

//6
console.log((A < B) == C) // True

//7
console.log((A < B) != D) // True

//8
console.log((A === F) === C) // False

//9
console.log((A === F) !== C) // True

//10
console.log(C !== false) // True

//11
console.log(A < E) // True

//12
console.log(4 == E) // True

//13
console.log(C !== D) // True

//14
console.log(C != D) // True



/////////////////// OPERATEUR LOGIQUE /////////////////////


console.log((A === 3) && (A === F) && (A < B)) // False 
console.log((A === 3) || (A === F) || (A < B)) // True 

console.log((A === 3) && !(A === F) && (A < B)) // True

                //T           //F          //T        //T             //F          //F
console.log(!(((A === 3) && (A === F) && (A < B)) || E > F || ((A === F) === C)) && !C) // FALSE