// JSON - Javascript Object Notation (AJAJ)

// json() method - return a second promise that resolves with the result of parsing the response body text as JSON (input is JSON, output is JS object)


// JSON.parse() converts a JSON string back into a JavaScript object. 
// This is useful when you retrieve JSON data from a web server or from localStorage and you need to manipulate the data in your application. 

const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

// Result:
// { name: 'John', age: 30, isAdmin: true }


// JSON.stringify() is used to convert a JavaScript object into a JSON string. 
// This is useful when you want to store or transmit data in a format that can be easily shared or transferred between systems.

const user = {
    name: "John",
    age: 30,
    isAdmin: true
};

const jsonStringg = JSON.stringify(user);
console.log(jsonStringg);