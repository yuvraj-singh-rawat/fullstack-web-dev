// Conditional Statements 

// 1. If Statement
let age1 = 20;

if (age1 >= 18) {
    console.log("You are an adult.");
}

// 2. If Else Statement
let age2 = 16;

if (age2 >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are underage.");
}

// 3. Else If Statement
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// 4. Nested If Statement
let age3 = 25;
let hasID = true;

if (age3 >= 18) {
    if (hasID) {
        console.log("Entry allowed.");
    } else {
        console.log("ID required.");
    }
} else {
    console.log("Entry denied.");
}


// 5. Switch Case Statement
let vals = 1;

switch (vals) {
    case 1:
        console.log("Rusie");
        break;
    case 2:
        console.log("Yuvi");
        break;
    default:
        console.log("Rawat");
};


// 6. Truthy & Falsy Values
// Falsy - false, 0, "", null, undefined, NaN

if (0) {
    console.log("This won't run");
}

if ("hello") {
    console.log("This will run");
}


// 7. Ternary Operator
let age4 = 18;
let canVote = age4 >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Yes, you can vote.


// 8. Optional Chaining -> ?.
// Used to access deeply nested object properties without having to check if each reference in the chain is valid.
let user = {
    name: "John",
    address: {
        city: "New York"
    }
};

console.log(user?.address?.city); // New York
console.log(user?.contact?.phone); // undefined with optional chaining
console.log(user.contact.phone); // Error without optional chaining