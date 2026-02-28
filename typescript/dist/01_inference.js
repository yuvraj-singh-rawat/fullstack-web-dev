// goal -> understand when to let Typescript infer types    
// TS -> JS very well
// when ts will writes the types or when you are going to write
let count = 0; // ts => number
const site = "abcdefgh"; // ts => exact literal "abcdefgh"
const scores = [10, 20, 30]; // number[]
// over annonation isn't bad => just noisy
export function add(a, b) {
    return a + b;
}
console.log(add(5, 2));
// you should also annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
