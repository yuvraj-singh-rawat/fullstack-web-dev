// Dates 
// The Date object is a built-in object in JavaScript that allows us to work with dates and times.

// Important
// To get the current date and time, you can use the Date.now() method, which returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. This is known as the Unix epoch time.

// Unix epoch time is a common way to represent dates and times in computer systems because it is an integer that can be easily stored and manipulated. 
// UTC stands for Universal Time Coordinated, which is the primary time standard by which the world regulates clocks and time.

// The new keyword is used to create a new instance of the Date object, and the Date object is then assigned to the variable now. 

const now = new Date();
// console.log(now);
// console.log(now.toString());
// console.log(now.toDateString());
// console.log(now.toLocaleString());
// console.log(typeof now); // object


// Specific Date
// const specificDate = new Date("March 17, 2026 12:00:00");
// const specificDate = new Date("2023-01-14");
const specificDate = new Date("01-14-2023");
// console.log(specificDate);
// console.log(specificDate.toString());


// TimeStamps 
let myTimeStamps = Date.now();

// console.log(myTimeStamps);
// console.log(specificDate.getDate());


// ISO 8601 is an international standard for representing dates and times. The format is YYYY-MM-DDTHH:mm:ss.sssZ.
// const date = new Date();
// console.log(date.toISOString());



const date = new Date();
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
// console.log(date.toLocaleDateString("en-IN", options));