// ASCII, short for American Standard Code for Information Interchange, 
// it is a character encoding standard used in computers to represent text. 
// It assigns a numeric value to each character, which is universally recognized by machines.
// ASCII is a system for encoding characters such as letters, digits, and symbols into numerical values. 

// For example, the capital letter A is represented by the number 65 in ASCII, while the lowercase a is represented by 97. This encoding allows computers to store and manipulate text.

let letter = "A";
console.log(letter.charCodeAt(0)); // 65 is ASCII value of "A"

let symbol = "!";
console.log(symbol.charCodeAt(0)); // 33

let char = String.fromCharCode(65);
console.log(char); // A