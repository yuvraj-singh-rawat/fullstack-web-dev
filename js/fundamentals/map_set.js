// Map - is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();

map.set('1', 'yuvraj'); // string key
map.set(1, 'yuvi'); // numeric key
map.set(true, 'rawat'); // boolean key

console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(true));


// get map size
console.log(map.size); // 3

// check if key exist or not
console.log(map.has(1)); // true

// remove element
// console.log(map.delete(true));

// remove everything from map
// console.log(map.clear());











// Iteration over Map

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let veg of recipeMap.keys()) {
    console.log(veg); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
}




















// Set - A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
}