const score = 500;
// console.log(score); // 500
// console.log(typeof score); // number

const score2 = new Number(200); // number is wrapper object
// console.log(score2); // [Number: 200]
// console.log(typeof score2); // object

let balance = 500;
// console.log(balance.toFixed(2)); // 500.00

let amount = 123.69458;
// console.log(amount.toPrecision(3)); // 124

let hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,000



// =============== Maths ================

// Math.min() and Math.max() return the minimum and maximum value
const smallest = Math.min(1, 5, 3, 9);
// console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
// console.log(largest); // 9


// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.round(4.9)); // 5


// Math.random() => random floating-point number between 0 (inclusive) and 1 (exclusive).
// const randomNum = Math.random();
// const randomNum = ((Math.random() * 10) + 1);
const randomNum = (Math.floor(Math.random() * 10) + 1);
console.log(randomNum);


const min = 10;
const max = 20;
const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum1);


// Math.trunc() removes the decimal part of a number, returning only the integer portion, without rounding
// console.log(Math.trunc(2.9)); // 2
// console.log(Math.trunc(9.1)); // 9  

// you can use the Math.sqrt() and Math.cbrt() methods to get the square root or cube root of a number
// console.log(Math.sqrt(81)); // 9
// console.log(Math.cbrt(27)); // 3

// Math.abs() method to get absolute value of a number
// console.log(Math.abs(-5)); // 5
// console.log(Math.abs(5)); // 5

// Math.pow() method takes two numbers and raise the first to the power of the second. 
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.pow(8, 2)); // 64