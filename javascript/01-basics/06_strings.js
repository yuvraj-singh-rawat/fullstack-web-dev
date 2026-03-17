const name = "Yuvraj";
const leetcodeQuestions = 1500;

// console.log(name + " Solved " + leetcodeQuestions + " Questions.");

// String Interpolation using Template Literals
// console.log(`${name} Solved ${leetcodeQuestions} Questions.`);

const newName = new String('Yuvraj Singh Rawat');
// console.log(newName); // [String: 'Yuvraj Singh Rawat']
// console.log(typeof newName); // object

// console.log(newName[0]); // Y
console.log(newName.__proto__);


// console.log(newName.length); // 18
// console.log(newName.toUpperCase()); // YUVRAJ SINGH RAWAT

const newString1 = newName.substring(0, 6);
// console.log(newString1); // Yuvraj

const newString2 = newName.slice(-4, 1);
// console.log(newString2);

const newString3 = "    Yuvraj     ";
// console.log(newString3); 
// console.log(newString3.trim()); // remove white spaces


const url = "https://yuvrajsingh.com/hello%20world";

console.log(url.replace('%20', '_'));
console.log(url.includes('hello')); // true


console.log(newName.split('-'));
console.log(newName)