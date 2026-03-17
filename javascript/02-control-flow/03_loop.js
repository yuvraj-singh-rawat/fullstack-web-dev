// Loops: while and for

// 1. While loop
// it executes the block of code as long as the condition is true.
let i = 0;
while (i < 10) {
    console.log("Hello World");
    i++;
};



// 2. Do While loop
// it will execute the block of code once, before checking if the condition is true,
// then it will repeat the loop as long as the condition is true.
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3); // 0, 1, 2



// 3. For Loop
// it repeats until a specified condition evaluates to false.
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

let z = 0;
for (; z < 5;) {
    console.log(z);
    z++;
}



// 4. For in loop - Iterates over the enumerable property names (keys) of an object.
// It can also be used to iterate over the indices of an array.
const user = {
    name: "yuvraj",
    age: 23,
    address: "Madarpura",
    nation: "India"
};

for (let key in user) {
    console.log(key); // name, age, address, nation
    console.log(key, ":", user[key]); // name : yuvraj
};




// 5. For of loop - Iterates over iterable values — like arrays, strings, maps, sets, etc.
// It cannot be used to iterate over the properties of an object.

// array
let arr5 = ["a", "b", "c"];

for (let value of arr5) {
    console.log(value); // a, b, c
};

// string
let string2 = "YUVRAJ";

for (let val of string2) {
    console.log(val); // Y, U, V, R, A, J
};

// map
let map = new Map();
map.set('name', 'yuvi');
map.set('age', 23);

for (let entry of map) {
    console.log(entry); // ['name', 'yuvi'], ['age', 23]
};