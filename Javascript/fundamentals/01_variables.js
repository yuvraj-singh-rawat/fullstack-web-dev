// Variables in JavaScript

// 1. Declaration
let name; 

// 2. Initialization            
name = "Yuvraj"; // Assigning a value to the variable

// 3. Declaration and Initialization in one step
let age = 25; 


// Three types of variables in JavaScript

// 1. Var 
// Value can be re-assigned and re-declared in the same scope
// Access Global and Local scope

var city = "Ajmer";
console.log(city); // Output: Ajmer
city = "Jaipur"; // Can be re-assigned
console.log(city); // Output: Jaipur

{
    var address = "Ajmer";
    var address = "Udaipur"; // Can be re-declared
}

console.log(address); // Udaipur

// 2. Let
// Value can be re-assigned but cannot be re-declared in the same scope
// Access Local scope only

let country = "India";
console.log(country); // Output: India
country = "USA"; // Can be re-assigned
console.log(country); // Output: USA

{
    let state = "Rajasthan";
    // let state = "Maharashtra"; // Error: Cannot re-declare
    state = "Maharashtra"; // Can be re-assigned
    console.log(state); // Output: Maharashtra
}

// console.log(state); // Error: state is not defined

// 3. Const
// Value cannot be re-assigned or re-declared
// Access Local scope only

const pi = 3.14;
console.log(pi); // Output: 3.14
// pi = 3.14159; // Error: Assignment to constant variable

{
    const gravity = 9.8;
    // const gravity = 10; // Error: Cannot re-declare
    // gravity = 10; // Error: Assignment to constant variable
    console.log(gravity); // Output: 9.8
}

// console.log(gravity); // Error: gravity is not defined

// Summary:
// - Use 'var' for global scope variables (avoid if possible)
// - Use 'let' for variables that may change value
// - Use 'const' for variables that should not change value 