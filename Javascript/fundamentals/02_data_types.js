// Data Types in JavaScript

// 1. Primitive Data Types

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















// Type Conversion/Coercion

// 1. Implicit Conversion - JavaScript automatically converts types.

let result = '5' + 3; // String + Number = String
console.log(result); // 53

let res = 5 + true; // Number + Boolean = Number
console.log(res); // 5 + 1 = 6

// true - 1
// false - 0

let und = 5 + undefined; // Number + Undefined = NaN
console.log(und); // NaN

let xsd = 5 + null; // null converted to 0
console.log(xsd); // 5

let zsa = true + "Yuvraj"; // Boolean + String = String
console.log(zsa); // trueYuvraj

let pa = "5" * 2; // String * Number = Number
console.log(pa); // 10

let resl = '5' - 3; // Subtracting a String and Number
console.log(resl); // 2


// 2. Explicit / Manual Conversion 

// Number to String Conversion -> String() or .toString()
let num = 123; // 123
let str = String(num); // '123'
console.log(typeof str); // string
let str2 = num.toString(); // '123'

// String to Number Conversion -> Number(), parseInt(), or parseFloat()
let str1 = '123'; // 123
let str3 = "10" / "2"; // 5
console.log(str3); // 5
let num1 = Number("42"); // 42
console.log(parseInt("42")); // 42
console.log(parseFloat("3453.76345345dsfsf")); // 3453.76345345
console.log(typeof num1); // number

let intNum = parseInt(str1);
// parseInt() parses up to the first non-digit character
// hence it is useful for extracting numbers from strings with units
let intNum1 = parseInt('50px');
console.log(intNum1); // 50
console.log(typeof intNum1); // number
console.log(intNum); // 123
console.log(typeof intNum); // number

// Boolean Conversion -> Boolean()
Boolean(1); // true
Boolean(0); // False
Boolean('hello'); // true
Boolean(''); // false
Boolean(null); // false

// Falsy Values for Boolean 
// null, undefined, NaN, '', 0, false 
// other values are Truthy Values

let abc = Number('hello');
console.log(abc); // NaN
console.log(typeof abc); // NaN


// Edge Case Examples
// 1. Empty Array + Empty Array = ""
console.log([] + []); // ""

// 2. Empty Array + Number = String
console.log([] + 1); // "1"
// [] is converted to "" during string concatenation