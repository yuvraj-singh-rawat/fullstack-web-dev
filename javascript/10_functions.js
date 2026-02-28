// First Class Functions
// Functions are treated as first-class citizens in JavaScript. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.

var b = function (a) {
    return function c() {
    }
}
console.log(b()); // returns function c(){}


// Function Declaration aka Function Statement
function greet() {
    console.log("Hello World");
}

greet(); // Hello World


// Function Expression => When we Declare Function in Variable
const num = function (num1, num2) {
    console.log(num1 + num2);
}

num(15, 10); // 25


// Named Function Expression
const a = function multiply(x, y) {
    return x * y;
};

console.log(a(5, 4)); // 20


// Arrow Function
const add1 = (a, b) => { // parameters
    return a + b;
};

console.log(add1(5, 10)); // arguments


// Arrow Function with parameters
const rem = (a, b) => a - b;
console.log(rem(10, 5)); // 5

const sqr = x => x * x;
console.log(sqr(8)); // 64


// Default Parameter
function say(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet(); // Hello Guest
greet("Yuvraj"); // Hello Yuvraj


// Rest Parameter
// it allows a function to accept an indefinite number of arguments as an array.
function sumAll(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4, 5, 6)); // 21


// Function inside Function (Nested)
function outer() {
    console.log("I am outer");
    function inner() {
        console.log("I am inner");
    }
    inner();
}
outer();


// High Order Functions -> functions who takes another functions as an arguments(callback), return a function as its result.

function greet(name) {
    return `Hello ${name}`;
}

function process(callback) { // Process is HOF it takes greet as an Argument
    let name = "Yuvraj";
    return callback(name);
}

console.log(process(greet)); // Hello Yuvraj


// Spread Operator in Functions
function sumV2(...numbers) {
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
        ans += numbers[i];
    }
    return ans;
}

console.log(sumV2(1, 2, 3, 4, 5, 6)); // 21

// Unlimited Arguments
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5)); // 15





// =========================== SCOPE ===========================

// Scope - Scope in programming refers to the visibility and accessibility of variables in different parts of your code.

// 1. Global Scope - Global scope is the outermost scope in a JavaScript program. 
// Variables declared in the global scope are accessible from anywhere in your code, including within functions and blocks. These variables are often called global variables.
// While global variables can be convenient, they should be used sparingly as they can lead to naming conflicts and make your code harder to maintain. 

let userName = "Yuvraj Singh Rawat"; // Global Scope

function printUserName() {
    console.log(`Hello ${userName}`); // can access userName
}

printUserName();
console.log(userName);

// 2. Local Scope - refers to variables that are only accessible within a function.

function showScore() {
    let score = 100; // local scope
    console.log(score);
};

showScore();
// console.log(score); // gives error

// 3️. Block Scope - Variables declared with let or const inside a block are only accessible within that block. 
// Block scope is a concept introduced with the let and const keywords in ES6.

{
    let age5 = 23;
    console.log(age5); // works
}

console.log(age5); // gives error







// Strict Mode

// without strict mode
// n = 10; // no error
// console.log(n); // 10

// with strict mode
// "use strict";
// s = 10; // gives error
// let s = 10;
// console.log(s);