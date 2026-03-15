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

4 * [] // 0
4 * [2] // 8
4 + [2] // "42"
4 + [1, 2] // "41,2"
4 * [1, 2] // NaN










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