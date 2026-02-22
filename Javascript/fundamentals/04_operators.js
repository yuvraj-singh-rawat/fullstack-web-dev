// Operators

// 1. ---- Arithmetic Operator ----
let u = 10, b = 3;
console.log(u - b);  // 7
console.log(u + b);  // 13
console.log(u * b);  // 30
console.log(u / b);  // 3.33
console.log(u % b);  // 1
console.log(u ** b); // 1000 (10^3) => 10 * 10 * 10 = 1000

// Increment / Decrement
// ++ => Increment
// -- => Decrement

let x = 5;
console.log(++x);  // 5 => 6 (First Increment then use)
console.log(x);   // 6
console.log(x++); // 6 => 7 (First use then Increment)
console.log(--x);  // 4 (First Decrement then use)
console.log(x--);  // 5 (First use then Decrement)



// 2. ---- Assignment Operators ----
let k = 10;

k += 5;
k -= 2;
k *= 3;
k /= 2;
k %= 4;
k **= 2; // k = k ** 2 = 10 ^ 2 = 100

console.log(k);

// 3. ---- Comparison Operators ----

console.log(10 == "10");   // true (Only Value Compare)
console.log(10 === "10");  // false (Strictly Compare Value and Type)
console.log(5 != "5");    // false  (Only Value Compare)
console.log(5 !== "5");    // true (Strictly Compare Value and Type)
console.log(5 > 3);        // true

// 4. ---- Logical Operators ---- 

// AND Operator (&&) => Both Conditions must be true

const age = 25;
const gender = "male";
if (age >= 18 && gender == "male") {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// OR Operator (||) => Any one condition should be true

const age1 = 23;
const gend = "female";
if (age >= 18 || gend == "male") {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// NOT Operator (!) => Negates the condition
// if condition is true then !true = false
// if condition is false then !false = true 

const numb = 4;
if (numb % 2 != 0) {
    console.log("Odd Number");
} else {
    console.log("Even Number");
}

// Nullish Coalescing ??
// if values is null or undefined, then add default
const offline = null;
const stat = offline ?? "online";

console.log(stat); // "Online"

// 5. ---- String Concatenation ----

let firstName = "Yuvraj";
let lastName = "Singh";

let fullName = firstName + " " + lastName;
console.log(fullName);  // Yuvraj Singh




// 6. ---- Ternary Operators ----

let ageBe = 16;
let resultIs = (ageBe >= 18) ? "Adult" : "Minor";
console.log(resultIs);  // Minor





// 7. ---- Bitwise Operators ----

// i) Bitwise And (&) -> if both bits are 1 than we get 1
console.log(5 & 3); // 1 (0101 & 0011 = 0001)

// ii) Bitwise Or (|) -> if any of bits are 1 than we get 1
console.log(5 | 3); // 7 (0101 | 0011 = 0111)

// iii) Bitwise XOR (^) -> if bits are same we get 0 or if diff we get 1 
console.log(5 ^ 3); // 6 (0101 ^ 0011 = 0110)

// iv) Bitwise NOT (~) -> 1 into 0 or 0 into 1
// ~n = -(n + 1)
console.log(~5); // -6 

// v) Bitwise Left Shift (<<)
// n << k = n * (2^k)
console.log(5 << 1); // 10 (0101 << 1 = 1010)

// vi) Bitwise Right Shift (>>)
console.log(5 >> 1); // -3 (0101 >> 1 = 0010)





// 8. ---- Typeof Operators ----
// This returns the type of its operand as a string.
console.log(typeof 42);           // "number"
console.log(typeof "Hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof { name: "Amit" }); // "object"
console.log(typeof function () { }); // "function"




// 9. ---- Unary Operators ----
// Unary operator act on a single operand to perform operations like type conversion, value manipulation, or checking certain conditions.

// i) The unary plus operator converts its operand into a number. If the operand is already a number, it remains unchanged.
const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number

// unary negative flips the sign.
const strr = '42';
const strToNegativeNum = -strr;

console.log(strToNegativeNum); // -42
console.log(typeof strr); // string
console.log(typeof strToNegativeNum); // number

// ii) The logical NOT operator, represented by an exclamation mark (!), is another unary operator. 
// It flips the boolean value of its operand. So, if the operand is true, it becomes false, and if it's false, it becomes true. 

let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline) // true

// iii) The bitwise NOT operator is a less commonly used unary operator. Represented by a tilde, (~) it inverts the binary representation of a number.
// Computers store numbers in binary format (1s and 0s). The ~ operator flips every bit, meaning it changes all 1s to 0s and all 0s to 1s. 

const num = 5; // The binary for 5 is 00000101
console.log(~num); // -6

// iv) The void keyword is a unary operator that evaluates an expression and returns undefined.

const result = void (2 + 2);
console.log(result); // undefined