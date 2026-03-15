// What is an Error Object?
// When a runtime error occurs, JavaScript automatically creates an Error object and throws it. 
// This object carries information that helps you identify what went wrong and respond appropriately.
// Every Error object has these core properties:

try {
    undeclaredVariable + 1;
} catch (error) {
    console.log(error.name);      // "ReferenceError"
    console.log(error.message);   // "undeclaredVariable is not defined"
    console.log(error.stack);     // Full trace showing file, line, column
}






// Determining Error Type & Handling Accordingly
function handleError(error) {
    if (error instanceof RangeError) {
        console.log("Value out of range. Please provide a valid input.");
    } else if (error instanceof ReferenceError) {
        console.log("Variable doesn't exist. Check your spelling.");
    } else if (error instanceof SyntaxError) {
        console.log("Bad syntax detected. Check your JSON or code.");
    } else {
        console.log("Unknown error:", error.message);
    }
}

try {
    let arr = new Array(-5);  // triggers RangeError
} catch (error) {
    handleError(error);
}

// Output: Value out of range. Please provide a valid input.