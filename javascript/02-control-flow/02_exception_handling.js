// Exception Handling 

// What is an Exception?
// When your program encounters an unexpected situation — dividing by zero, accessing a property on null, calling something that isn't a function — JavaScript throws an exception. If you don't handle it, your entire program crashes.




// 1. The try...catch Block 
// try {
//     let result = 10 / 0;           // No error (returns Infinity in JS)
//     let data = JSON.parse("invalid json @@"); // This WILL throw!
//     console.log(data);
// } catch (error) {
//     console.log("Something went wrong:", error.message);
// }

// Output: Something went wrong: Unexpected token 'i', "invalid json @@" is not valid JSON




// 2. The finally Block
// finally runs no matter what — whether an error occurred or not. It's perfect for cleanup tasks like closing a database connection or hiding a loading spinner.

// function readFile() {
//     try {
//         console.log("Opening file...");
//         throw new Error("File not found!");  // simulating an error
//         console.log("Reading file...");      // Never reached
//     } catch (error) {
//         console.log("Caught error:", error.message);
//     } finally {
//         console.log("Closing file... (always runs)");
//     }
// }

// readFile();

// Output:
// Opening file...
// Caught error: File not found!
// Closing file... (always runs)





// 3. The Error Object
// When an error is thrown, JavaScript gives you an Error object with useful properties:

try {
    null.toString();  // Can't call method on null
} catch (error) {
    console.log(error.name);     // TypeError
    console.log(error.message);  // Cannot read properties of null
    console.log(error.stack);    // Full stack trace (very useful for debugging)
}





// 4. Built-in Error Types
// JavaScript has several specialized error types:

// 1. ReferenceError — using a variable that doesn't exist
try {
    console.log(studentName);
} catch (e) {
    console.log(e.name); // ReferenceError
}

// 2. TypeError — wrong type operation
try {
    let num = 42;
    num.toUpperCase();
} catch (e) {
    console.log(e.name); // TypeError
}

// 3. SyntaxError — invalid JSON or code syntax
try {
    JSON.parse("{bad json}");
} catch (e) {
    console.log(e.name); // SyntaxError
}

// 4. RangeError — value out of valid range
try {
    let arr = new Array(-1);
} catch (e) {
    console.log(e.name); // RangeError
}

// 5. URIError — malformed URI
try {
    decodeURIComponent('%');
} catch (e) {
    console.log(e.name); // URIError
}





// 5. throw — Manually Throwing Errors
// You're not limited to waiting for JavaScript to throw errors. You can throw them yourself — this is called manual throwing.

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
} catch (error) {
    console.log(error.message); // Division by zero is not allowed!
}





// 6. Custom Error Classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);          // Call parent constructor
        this.name = "ValidationError";
        this.field = field;      // Custom property
    }
}

class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = "DatabaseError";
        this.query = query;
    }
}

function registerUser(username, age) {
    if (!username) {
        throw new ValidationError("Username is required", "username");
    }
    if (age < 18) {
        throw new ValidationError("Must be 18 or older", "age");
    }
    console.log("User registered!");
}

try {
    registerUser("", 15);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed on field "${error.field}": ${error.message}`);
    } else if (error instanceof DatabaseError) {
        console.log("DB issue:", error.message);
    } else {
        throw error; // Re-throw unknown errors!
    }
}

// Output: Validation failed on field "username": Username is required




// 7. Re-throwing Errors

function processData(data) {
    try {
        JSON.parse(data);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log("Invalid JSON format. Please fix your data.");
        } else {
            throw error; // Not our problem, pass it up!
        }
    }
}






// 8. Async Exception Handling — async/await
// Without error handling (dangerous!)
async function fetchUser() {
    let response = await fetch("https://api.example.com/user/999");
    let data = await response.json();
    return data;
}

// With try...catch (correct way ✅)
async function fetchUser() {
    try {
        let response = await fetch("https://api.example.com/user/999");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Failed to fetch user:", error.message);
    }
}





// 9. Promise .catch() — Error Handling in Promise Chains
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error.message))  // catches any error above
    .finally(() => console.log("Request complete."));      // always runs
