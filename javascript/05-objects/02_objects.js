// Object 
// Two Ways to create Object

// 1. using new Object()
// The Object() constructor creates a new empty object. 
const cars = new Object();
cars.brand = "Toyota";
cars.model = "Fortuner";
cars.year = 2023;

// 2. Object Literal Syntax
const car = {
    name: "RR",
    model: "Phantom",
    color: "Black",
    year: 2028,
    country: {
        n1: "india",
        n2: "usa",
        n3: "uk",
        n4: "uae"
    },
    sure: true,
    start: function () {
        console.log("Bhun Bhun!!!!");
    }
};

// console.log(car.name);
// console.log(car.country.n1);

car.model = "Ghost"; // updated property value in object
// console.log(car.model);

// delete car.model;
// console.log(car.model);

// Check if Key Exists
console.log("brand" in cars); // true

// Bracket notation is more flexible than dot notation because it allows you to use property names that aren't valid JavaScript identifiers.
// bracket notation is that it allows you to use variables to access properties dynamically
console.log(car["model"]);

// Checking object has property or not
console.log(car.hasOwnProperty("model")) // true



// This keyword
let player = {
    name: "Yuvraj",
    lname: "Singh",
    address: "Ajmer",
    greet() {
        console.log("Hello " + this.lname); // this means => player.lname
    }
};

// player.greet();



// Loop Through an Object

// for (let info in player) {
//     console.log(info + ": " + player[info]);
// }











const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Object Methods
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// console.log(Object.assign(person));

const assigned = Object.assign({}, person, cars);
console.log(assigned);

// Spread Operator shortcut of Object.assign
const copyPerson = { ...person };
console.log(copyPerson);


// Optional Chaining (?.)
// if any property has undefined path, then no error thrown
const user = {
    name: "Yuvraj",
    address: {
        city: "Ajmer"
    }
};

console.log(user.address?.city);       // Ajmer
console.log(user.address?.pincode);    // undefined
console.log(user.contact?.phone);      // undefined (no error)






// Object.freeze(obj)
// make object immutable

const settings = {
    darkMode: true
};
Object.freeze(settings);

settings.darkMode = false; // ❌ won't work
console.log(settings.darkMode); // true



// Object.seal(obj)
// can update values but can't add new keys or delete

const persons = {
    name: "Yuvraj"
};
Object.seal(persons);

persons.name = "Raj";        // ✅ allowed
persons.age = 23;            // ❌ not allowed
delete persons.name;         // ❌ not allowed




let a1 = { value: 12 };
let b1 = a1;
b1.value = 20;
// console.log(b1); // 20
// console.log(a1); // 20








// Object Destructuring

let movie = {
    title: "KGF",
    year: 2018,
    actor: "Yash"
};

// Access Value Type

// 1. Dot Notation
console.log(movie.title); // KGF
console.log(movie.year); // 2018

// 2. Bracket Notation
console.log(movie["actor"]); // Yash
console.log(movie["title"]); // KGF

// 3. Destructring
let { title, year, actor } = movie;

console.log(title); // KGF
console.log(year); // 2018
console.log(actor); // Yash





// Nested Destructuring

const users = {
    name: "Amit",
    address: {
        city: "Delhi",
        pincode: 110001
    }
};

const { address: { city } } = users;

console.log(city); // Delhi





// Rest Operator (...)
const { name, ...rest } = user;

console.log(name);
console.log(rest);






// Clone Objects

let c = Object.assign({}, movie);
let d = { ...movie };

// console.log(c);
// console.log(d);









// Symbol Type
let sym = Symbol("abc");

let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // false because every Symbol is Unique

// Global Symbol
let sym1 = Symbol.for("id");
let sym2 = Symbol.for("id");

console.log(sym1 === sym2); // true because global symbol uses same key






// Date Object

let timeNow = new Date();
console.log(timeNow);

let timeStamp = Date.now();
console.log(timeStamp);





// creating proto type in js 
// __proto__ using this to set prototype

// example 
const employee = {
    calcTax() {
        console.log("tax rate is 20%");
    },
};

const emp1 = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 10%")
    },
};

emp1.__proto__ = employee; // setting prototype

// console.log(emp1.salary); // 50000
// emp1.calcTax(); // tax rate is 10%
// emp1.__proto__.calcTax(); // tax rate is 20%
// console.log(emp1); // emp1 object with prototype