// Type Conversion/Coercion

// 1. Implicit Conversion - JavaScript automatically converts types.

// 1.1 String + Number = String
let result = '5' + 3; 
// console.log(result); // 53

// 1.2 Number + Boolean = Number
let res = 5 + true; 
// console.log(res); // 5 + 1 = 6
// console.log(+true); // 1

// true - 1
// false - 0

// 1.3 Number + Undefined = NaN
// console.log(5 + undefined); // NaN

// null converted to 0
// console.log(5 + null); // 5

// 1.4 Boolean + String = String
// console.log(true + "Yuvraj"); // trueYuvraj

// 1.5 String * Number = Number
// console.log("5" * 2); // 10
// console.log("5a" * 2); // NaN

// 1.6 Subtracting a String and Number
// console.log('5' - 3); // 2
// console.log('5a' - 3); // NaN

// 4 * [] // 0
// 4 * [2] // 8
// 4 + [2] // "42"
// 4 + [1, 2] // "41,2"
// 4 * [1, 2] // NaN










// 2. Explicit / Manual Conversion 

// 2.1 Number to String Conversion -> String() or .toString()
let num = 123; // 123
let str = String(num);
let str2 = num.toString(); // '123'
// console.log(str); // '123'
// console.log(typeof str); // string




// 2.2 String to Number Conversion -> Number(), parseInt(), or parseFloat()
let str1 = '123'; // 123
let numtoString = Number(str1); // 123
// console.log(typeof numtoString); // number

// "123" => 123
// "123abc" => NaN
// true => 1
// false => 0

// console.log(parseInt("42")); // 42
// console.log(parseFloat("3453.76345345dsfsf")); // 3453.76345345


// parseInt() parses up to the first non-digit character
// hence it is useful for extracting numbers from strings with units 
let num1 = "123xyz";
let intNum = parseInt(num1);
// console.log(intNum); // 123
// console.log(typeof intNum); // number



// 2.3 Boolean Conversion -> Boolean()
Boolean(1); // true
Boolean(0); // False
Boolean('hello'); // true
Boolean(''); // false
Boolean(null); // false

// Falsy Values for Boolean 
// null, undefined, NaN, '', 0, false 
// other values are Truthy Values

let abc = Number('hello');
// console.log(abc); // NaN
// console.log(typeof abc); // NaN


// Edge Case Examples
// 1. Empty Array + Empty Array = ""
// console.log([] + []); // ""

// 2. Empty Array + Number = String
// console.log([] + 1); // "1"
// [] is converted to "" during string concatenation