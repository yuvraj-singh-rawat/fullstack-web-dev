// Data Types in JavaScript

// 1. Primitive Data Types

// - Stored in Stack Memory
// - directly stored in the variable's memory space
// - immutable - can not be changed

// 1. Number - integers, decimals, positive, negative, special values like NaN and Infinity

let intNumb = 42; // Integer
let floatNum = 3.14; // Decimal
let negativeNum = -7; // Negative number
let nanValue = NaN; // Not a Number
let infinityValue = Infinity; // Positive Infinity
let negInfinityVfialue = -Innity; // Negative Infinity

console.log("Number Examples:");
console.log(intNumb, floatNum, negativeNum, nanValue, infinityValue, negInfinityValue);


// 2. Bigint - numbers larger than Number’s safe limit (9007199254740991)

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

let bigNum = 12345678910111213141516n; // BigInt
console.log(bigNum);

// console.log(5n + 5); // error


// 3. String - Sequence of characters enclosed in "", '', or `` (template literals)\
// Strings are immutable in JavaScript

let strr1 = "Hello"; // double quotes
let strr2 = 'Hello'; // single quotes
let strr3 = `Hello`; // template literals

// template literals allow us to embedding expressions 
let name = "Yuvraj";
console.log(`Hello + ${name}`); // Hello Yuvraj

// String is Immutable -> cannot change characters at specific index
let strrr = "Yuvraj";
strrr = "Singh"; // Reassignment is allowed
console.log(strrr); // Singh
strrr[0] = "J";
console.log(strrr[0]); // Y - not changed

// 4. Symbol - Unique, immutable identifiers

let id = Symbol("description");
console.log(typeof id); // symbol

// each symbol is unique
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // false

// Use case: To create unique property keys in objects, avoiding accidental overwrites.

let obj = {};
let symKey = Symbol("key");

obj[symKey] = "value";
console.log(obj[symKey]); // value
console.log(symKey) // Symbol(key)

// 5. Boolean - true or false
// 1 - true
// 0 - false

let isTrue = true;
let isFalse = false;

console.log(typeof isTrue); // boolean

// 6. undefined - variable declared but not assigned gets undefined automatically

let a;
console.log(a); // undefined

let q = undefined;
console.log(q); // undefined

// You can replace the whole value, not mutate it.

// 7. null - represents "no value" or "empty value"

let d = null;
console.log(d); // null
















// 2. Non Primitive Data Type

// - Stored in Heap Memory
// - Copied by reference, not by value
// - Mutable - can be changed

// 1. Object - An object is a collection of key-value pairs (unordered).

let person = {
    name: "Yuvraj",
    age: 23,
    greet: function () {
        console.log("Hi!");
    }
};

// Accessing
console.log(person.name); // Yuvraj
console.log(person["age"]); // 23

// Adding
person.city = "Ajmer";
console.log(person.city); // Ajmer

// TypeOf
console.log(typeof person); // Object


// 2. Array - Special type of object used to store ordered lists.

let arr = [10, 11, 12, 13, 14];

console.log(arr[0]); // 10
console.log(Array.isArray(arr)); // true


// 3. Functions - functions are first-class objects — they can be stored in variables, passed as arguments, and returned.

function greet(name) {
    return name;
};

const greet = function (name) {
    return name;
};

const greeet = (name) => {
    return name;
};

console.log(greet("Yuvraj")); // Yuvraj
console.log(greeet("Yuvraj")); // Yuvraj

console.log(typeof greet); // function
console.log(typeof greeet); // function

// 4. Special Type 

// 4.1 Date - represents dates and times
let now = new Date();
console.log(now.toDateString());

// 4.2 RegExp - used for pattern matching within strings
let person = /hello/i;
console.log(pattern.test("Hello World")); // true

// 4.3 Map - collection of key-value pairs where keys can be of any type
let mpp = new Map();
mpp.set("name", "yuvraj");
mpp.set({}, "objectKey");

console.log(mpp.get("name")); // yuvraj
console.log(mpp.get({})); // undefined - different reference

// 4.4 Set
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate, will be ignored

console.log(set.has(1)); // true
console.log(set.size); // 2