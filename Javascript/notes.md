# JavaScript Array Basics

## Definition

A **JavaScript array** is an ordered collection of values, each
identified by a numeric index.

The values in a JavaScript array can be of different data types,
including:

-   Numbers\
-   Strings\
-   Booleans\
-   Objects\
-   Other arrays

Arrays are contiguous in memory, meaning all elements are stored in a
single, continuous block of memory locations. This allows efficient
indexing and fast access to elements.

### Example Code

``` js
const developers = ["Jessica", "Naomi", "Tom"];
```

------------------------------------------------------------------------

## Accessing Elements From Arrays

To access elements from an array, reference the array followed by its
index number inside square brackets.

JavaScript arrays are **zero-based indexed**, which means:

-   First element → index `0`
-   Second element → index `1`
-   And so on...

If you try to access an index that doesn't exist, JavaScript returns
`undefined`.

### Example Code

``` js
const developers = ["Jessica", "Naomi", "Tom"];

developers[0]; // "Jessica"
developers[1]; // "Naomi"
developers[10]; // undefined
```

------------------------------------------------------------------------

## `length` Property

The `length` property returns the number of items in an array.

### Example Code

``` js
const developers = ["Jessica", "Naomi", "Tom"];

developers.length; // 3
```

------------------------------------------------------------------------

## Updating Elements in an Array

Use the assignment operator (`=`) to update an element at a specific
index.

### Example Code

``` js
const fruits = ["apple", "banana", "cherry"];

fruits[1] = "blueberry";

console.log(fruits); 
// ["apple", "blueberry", "cherry"]
```

------------------------------------------------------------------------

# Two-Dimensional Arrays

## Definition

A **two-dimensional array** is an array of arrays.

It is used to represent grid-like data structures such as:

-   Chessboards\
-   Spreadsheets\
-   Pixels in an image

To access an element, you need two indices:

``` js
array[row][column]
```

### Example Code

``` js
const chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]); 
// "Q"
```

------------------------------------------------------------------------

# Array Destructuring

## Definition

Array destructuring allows you to extract values from arrays and assign
them to variables using concise syntax.

### Example Code

``` js
const fruits = ["apple", "banana", "orange"];

const [first, second, third] = fruits;

console.log(first);  
console.log(second); 
console.log(third);  
```

------------------------------------------------------------------------

## Rest Syntax (`...`)

The rest syntax captures the remaining elements into a new array.

### Example Code

``` js
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];

const [first, second, ...rest] = fruits;

console.log(first);  
console.log(second); 
console.log(rest);   
```

------------------------------------------------------------------------

# Common Array Methods

## `push()`

Adds elements to the end of an array and returns the new length.

``` js
const desserts = ["cake", "cookies", "pie"];

desserts.push("ice cream");

console.log(desserts);
```

## `pop()`

Removes the last element and returns it.

``` js
const desserts = ["cake", "cookies", "pie"];

desserts.pop();

console.log(desserts);
```

## `shift()`

Removes the first element and returns it.

``` js
const desserts = ["cake", "cookies", "pie"];

desserts.shift();

console.log(desserts);
```

## `unshift()`

Adds elements to the beginning of the array and returns the new length.

``` js
const desserts = ["cake", "cookies", "pie"];

desserts.unshift("ice cream");

console.log(desserts);
```

## `indexOf()`

Returns the first index of a specific element. Returns `-1` if not
found.

``` js
const fruits = ["apple", "banana", "orange", "banana"];

const index = fruits.indexOf("banana");

console.log(index);
console.log(fruits.indexOf("not found"));
```

## `splice()`

Adds or removes elements at any position. This method mutates the
original array.

``` js
const colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow", "purple");

console.log(colors);
```

## `includes()`

Checks if an array contains a specific value.

``` js
const programmingLanguages = ["JavaScript", "Python", "C++"];

console.log(programmingLanguages.includes("Python"));
console.log(programmingLanguages.includes("Perl"));
```

## `concat()`

Creates a new array by merging arrays or values.

``` js
const programmingLanguages = ["JavaScript", "Python", "C++"];

const newList = programmingLanguages.concat("Perl");

console.log(newList);
```

## `slice()`

Returns a shallow copy of a portion of an array.

``` js
const programmingLanguages = ["JavaScript", "Python", "C++"];

const newList = programmingLanguages.slice(1);

console.log(newList);
```

## Spread Syntax (`...`)

Creates a shallow copy of an array.

``` js
const originalArray = [1, 2, 3];

const shallowCopiedArray = [...originalArray];

shallowCopiedArray.push(4);

console.log(originalArray);
console.log(shallowCopiedArray);
```

## `split()`

Divides a string into an array based on a separator.

``` js
const str = "hello";

const charArray = str.split("");

console.log(charArray);
```

## `reverse()`

Reverses an array in place.

``` js
const desserts = ["cake", "cookies", "pie"];

console.log(desserts.reverse());
```

## `join()`

Joins array elements into a string.

``` js
const reversedArray = ["o", "l", "l", "e", "h"];

const reversedString = reversedArray.join("");

console.log(reversedString);
```
