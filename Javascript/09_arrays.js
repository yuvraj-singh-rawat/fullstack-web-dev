// =========================== ARRAYS ===========================

// Arrays are Mutable in JS

// Accessing & Modifying Array Elements
let arr = [10, 20, 30, 40];
console.log(arr[0]); // 10
arr[0] = 50;
console.log(arr[0]); // 50

// Data types allowed
let arrr = [10, "Yuvraj", 'X', true, null, undefined, { name: "Yuvi" }, [1, 2]];
console.log(arrr[2]); // X

// typeof vs isArray
console.log(typeof arrr); // object (not array)
console.log(Array.isArray(arrr)); // true








// 4 Main Ways to Create Array in JS

// 1. using Array Literal
let arr1 = [10, 20, 30, 40];
console.log(arr1); // [10, 20, 30, 40]

// 2. New Array Constructor
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2); // [1, 2, 3, 4, 5]

let arr3 = new Array(5); // If you pass a single numeric value, it creates an empty array of that length, not an element
console.log(arr3); // [ <5 empty items> ]

// 3. using Array.of() => creates a new array with the exact elements you provide
let arr4 = Array.of(5, 6);
console.log(arr4); // [5, 6]

// 4. using Array.from() => creates array from any iterable things like map, set, nodelist
let arr5 = Array.from('hello');
console.log(arr5); // ['h', 'e', 'l', 'l', 'o']








// =========================== 2D ARRAYS ===========================

let twoDArray = [
    [1, 2, 3, 4],
    ['a', 'b', 'c', 'd'],
    ["Yuvraj", "Singh", "Rawat"]
]

console.log(twoDArray[2][0]); // Yuvraj









// ============== Array Methods ==============

let arr7 = [10, 20, 30, 40, 50];

// these are mutating methods => Mutate means they change the original array

// push() - Add to end
// The push() method is used to add one or more elements to the end of an array. 
arr7.push(100);
console.log(arr7); // [10, 20, 30, 40, 50, 100]

// pop() - Remove from end
// The pop() method removes the last element from an array and returns that element.
arr7.pop(100);
console.log(arr7); // [10, 20, 30, 40, 50]

// shift() - Remove from start
// the shift() method removes the first element from an array and returns that element.
arr7.shift(10);
console.log(arr7); // [20, 30, 40, 50]

// unshift() - Add to start
// The unshift() method adds one or more elements to the beginning of an array and returns its new length.
arr7.unshift(10);
console.log(arr7); // [10, 20, 30, 40, 50]




// split() - The split() method divides a string into an array of substrings and specifies where each split should happen based on a given separator.
// If no separator is provided, the method returns an array containing the original string as a single element. 
let name = "Yuvraj";
let charArray = name.split("");
console.log(charArray); // [ 'Y', 'u', 'v', 'r', 'a', 'j' ]


// splice()	- Add/remove/replace in-place
// array.splice(startIndex, itemsToRemove, item1, item2)
// syntex: splice(start, deleteCount, ...items)
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]


// reverse() - reverse array in-place
let charArray2 = ['Y', 'u', 'v', 'r', 'a', 'j'];
charArray2.reverse();
console.log(charArray2); // [ 'j', 'a', 'r', 'v', 'u', 'Y' ]


// sort() - sort the array 
arr7.sort();
console.log(arr7); // [10, 20, 30, 40, 50]

// fill() - Fill elements with static value
// fill(value, start?, end?)
let arr8 = new Array(5);
arr8.fill(4, 0, 5);
console.log(arr8); // [4, 4, 4, 4, 4]








// these are non-mutating methods => They do not change the original array but return a new array or value
let arr9 = [10, 20, 30, 40, 50];

// slice(start?, end?, Update?) - Returns a copy portion of array
// The slice() method allows you to extract a portion of a string and returns a new string, without modifying the original string. 
// It takes two parameters: the starting index and the optional ending index.
let fullName = "Yuvraj Singh Rawat";
console.log(fullName.slice(0, 6)); // Yuvraj 

// concat() - Merge arrays
// This method creates a new array by merging two or more arrays. When used with a single array, it effectively creates a shallow copy. 
let arr10 = [11, 12, 13, 14, 15, 16];
let arr11 = [20, 21, 22, 23, 24, 25];
console.log(arr10.concat(arr11)); // [11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25]
console.log(arr10 === arr11); // false
console.log([11, 12, 13, 14].concat(arr9));

// includes() - Check if value exists
console.log(arr9.includes(30)); // true

// indexOf(value) - First index of a value
console.log(arr9.indexOf(20)); // 1

// lastIndexOf(value) - Last index of value (searches from end)
console.log(arr9.lastIndexOf(50)); // 4

// join(separator) - Join into string
console.log(arr9.join("-")); // 10-20-30-40-50

// toString() - Convert array to string
console.log(arr9.toString()); // 10,20,30,40,50

// flat(depth) - Flatten nested arrays
let arr12 = [1, 2, 3, 4, 5, [1, 2], [12, 4, 12], [12, 144, 15]];
console.log(arr12.flat(1)); // [1, 2, 3, 4, 5, 1, 2, 12, 4, 12, 12, 144, 15]

// flatMap(callback) - Like map() followed by flat(1)
let arr14 = [1, 2, 3, 4, 5];
let result = arr14.flatMap(x => [x, x * 1]);
console.log(result); // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]



// Other Important Methods
let arr15 = [10, 20, 30, 40, 50];

// 1. forEach() - Run function on each item
arr15.forEach((arr15, i) => {
    console.log(i + ": " + arr15);
})


// 2. map(callback) - Transform each element → new array
const squares = arr15.map(num => num * num);
console.log(squares); // [100, 400, 900, 1600, 2500]


// 3. filter(callback) - Return only elements where condition is true
// Syntax:
// const filtered = array.filter((element) => condition);

const ages = [15, 18, 21, 16, 25];

const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 21, 25]


// 4. reduce(callback, initial) - Reduce to single value (sum, max, etc.)
// Syntax:
// const result = array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, initialValue);

const prices = [100, 200, 300, 400, 500];

const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 1500


// 5. find(callback) - Return first element matching condition
// Syntax:
// const result = array.find((element) => condition);

const users = [
    { id: 1, name: 'Yuvraj' },
    { id: 2, name: 'Rawat' },
];

const found = users.find(user => user.id === 2);
console.log(found); // { id: 2, name: 'Rawat' }

const fruitss = [
    { id: 1, name: "banana" },
    { id: 2, name: "grapes" }
];

const founds = fruitss.find(fruit => fruit.name === 'grapes');
console.log(founds)


// 6. findIndex(callback) - Return index of first match

// Syntax:
// array.findIndex(function(element, index, array) {
//     // return true ya false
// })

const numbers = [10, 15, 25, 30, 40];

const index = numbers.findIndex(num => num > 20);

console.log(index);  // Output: 2


// 7. every(callback) - Check if all items satisfy condition

const scores = [80, 85, 90];

const allPassed = scores.every(score => score > 60);
console.log(allPassed); // true


// 8. some(callback) - Check if at least one item satisfies
// Syntax: 
// const result = array.some((element) => condition);

const marks = [10, 20, 50, 90];

const hasPassed = marks.some(mark => mark > 40);
console.log(hasPassed); // true









// ============== Array Destructuring ==============

let fruit = ["apple", "banana", "orange", "mango", "kiwi"];

console.log(fruit[0]); // apple
console.log(fruit[1]); // banana
console.log(fruit[2]); // orange

// let [first, second, third, ...rest] = fruit; // all elements array destructure

// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(third);  // "orange"
// console.log(rest); // ["mango", "kiwi"]


// Individual elements destructure
const first = fruit[0];
const second = fruit[1];
const third = fruit[2];

console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"


// Make a Duplicate Array
const arr17 = [1, 2, 3];
const duplicateArr = [...arr17, 4, 5, 6, "Apple", "Banana"];
console.log(duplicateArr); // [1, 2, 3, 4, 5, 6, 'Apple', 'Banana']

// Q. Merge two arrays
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

const answer = [...num1, ...num2];
console.log(answer); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]














// Array (Map, Filter, Reduce)
const arr18 = [10, 20, 30, "Apple", true, "banana"];
console.log(arr18);
arr18.push("Orange");
console.log(arr18);
arr18.unshift("start");
console.log(arr18);

for (let i = 0; i < arr18.length; i++) {
    const element = arr18[i];
    console.log(element);
}

// Map
const newArray = arr18.map((element) => {
    return element;
});

console.log(newArray); // ['start', 10, 20, 30, 'Apple', true, 'banana', 'Orange']

// Object
const product = [
    {
        price: 1200,
        name: "iPhone"
    }, {
        price: 1500,
        name: "Hp"
    }, {
        price: 2000,
        name: "Lenovo"
    },
];

product.map((element) => {
    console.log(element.name, element.price)
})





// Filter
const arr20 = [10, 20, 30, 40, 50];

const res = arr20.filter((element) => {
    return element >= 30;
});

console.log(res); // [30, 40, 50]





// Reduce 
const arr19 = [10, 20, 30, 40, 50];

function sumOfElement(arr) {
    let sum = 0;
    for (let i = 0; i < arr19.length; i++) {
        sum = sum + arr19[i];
    }
    return sum;
}

console.log(sumOfElement(arr19)); // 150

const ans = arr19.reduce((accumulator, element) => {
    return accumulator + element;
}, 0); // 0+10 10+20 30+30 60+40 100+50 150

const ans1 = arr19.reduce((acc, ele) => acc + ele, 0);

console.log(ans1); // 150
console.log(ans); // 150