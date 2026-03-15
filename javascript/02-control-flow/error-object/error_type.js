// All Error Types 

// 1. AggregateError — A Collection of Errors Thrown Simultaneously
// This is used when multiple errors need to be reported at once. 
// The most common real-world case is Promise.any() — it only rejects when all promises fail, and it bundles all those failures into one AggregateError.

// Example 1: Promise.any() — all promises fail
const p1 = Promise.reject(new Error("Server 1 is down"));
const p2 = Promise.reject(new Error("Server 2 timed out"));
const p3 = Promise.reject(new Error("Server 3 refused connection"));

try {
    let result = await Promise.any([p1, p2, p3]);
} catch (error) {
    if (error instanceof AggregateError) {
        console.log(error.message);  // "All promises were rejected"

        // The .errors property holds ALL individual errors
        error.errors.forEach((err, index) => {
            console.log(`Error ${index + 1}: ${err.message}`);
        });
    }
}

// Output:
// All promises were rejected
// Error 1: Server 1 is down
// Error 2: Server 2 timed out
// Error 3: Server 3 refused connection


// Example 2: Manually throwing an AggregateError
function validateForm(data) {
    const errors = [];

    if (!data.name) errors.push(new Error("Name is required"));
    if (!data.email) errors.push(new Error("Email is required"));
    if (!data.age) errors.push(new Error("Age is required"));

    if (errors.length > 0) {
        throw new AggregateError(errors, "Form validation failed");
    }
}

try {
    validateForm({ name: "", email: "", age: "" });
} catch (error) {
    if (error instanceof AggregateError) {
        console.log(error.message); // Form validation failed
        error.errors.forEach(e => console.log("-", e.message));
    }
}

// Output:
// Form validation failed
// - Name is required
// - Email is required
// - Age is required









// 2. EvalError — Error During eval() Expression
// eval() is a built-in JavaScript function that executes a string as code. An EvalError signals that something went wrong during that evaluation.

// What eval() does:
eval("console.log('Hello from eval')");  // Hello from eval
eval("2 + 2");                           // returns 4

// EvalError example:
try {
    // In modern JS, eval rarely throws EvalError itself,
    // but you can throw it manually to signal eval-related problems
    let code = getUserInput(); // imagine this returns dangerous/broken code

    if (code.includes("while(true)")) {
        throw new EvalError("Unsafe code detected in eval input");
    }

    eval(code);
} catch (error) {
    if (error instanceof EvalError) {
        console.log("Eval problem:", error.message);
    }
}

// Important note: In modern JavaScript (ES5+), EvalError is rarely thrown by the engine itself — it's mostly there for legacy reasons. However, you can still throw it manually when building tools or sandboxes that involve code evaluation. More importantly, avoid using eval() in real projects — it's a major security risk.








// 3. InternalError — A Bug Inside the JavaScript Engine Itself
// This error is thrown when something goes wrong inside the JavaScript engine, not in your code logic. The most common cause is too much recursion — a function calling itself so many times that the call stack overflows.

// Example 1: Infinite recursion — causes InternalError (stack overflow)
function countForever(n) {
    return countForever(n + 1);  // Never stops!
}

try {
    countForever(0);
} catch (error) {
    console.log(error.name);    // InternalError (Firefox) or RangeError (Chrome)
    console.log(error.message); // "too much recursion"
}

// Note: InternalError is Firefox-specific. Chrome and Node.js throw a RangeError ("Maximum call stack size exceeded") for the same scenario. Always handle both when writing cross-browser code:

try {
    countForever(0);
} catch (error) {
    if (error instanceof InternalError ||
        (error instanceof RangeError && error.message.includes("call stack"))) {
        console.log("Recursion went too deep! Add a base case to your function.");
    }
}










// 4. RangeError — Value is Outside the Allowed Range
// Thrown when you pass a value to a function or operation that is outside the set of acceptable values.

// Example 1: Invalid array size
try {
    let arr = new Array(-1);  // Arrays can't have negative length
} catch (error) {
    console.log(error.name);    // RangeError
    console.log(error.message); // Invalid array length
}

// Example 2: toFixed() — decimal places must be between 0 and 100
try {
    let num = 3.14159;
    console.log(num.toFixed(200));  // 200 decimal places? Not allowed!
} catch (error) {
    console.log(error.name);    // RangeError
    console.log(error.message); // toFixed() digits argument must be between 0 and 100
}

// Example 3: Stack overflow from recursion (in Chrome/Node.js)
function recurse() {
    return recurse();
}

try {
    recurse();
} catch (error) {
    console.log(error.name);    // RangeError
    console.log(error.message); // Maximum call stack size exceeded
}

// Example 4: Invalid radix in toString()
try {
    let num = 255;
    console.log(num.toString(1));  // Radix must be between 2 and 36
} catch (error) {
    console.log(error.name);    // RangeError
    console.log(error.message); // toString() radix must be between 2 and 36
}







// 5. ReferenceError — Variable Doesn't Exist or Isn't Declared Yet
// Thrown when your code refers to a variable or object that doesn't exist in the current scope.

// Example 1: Using a variable that was never declared
try {
    console.log(studentName);  // studentName was never declared
} catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // studentName is not defined
}

// Example 2: Accessing a variable before declaration (with let/const)
try {
    console.log(myVar);  // Accessing before declaration — Temporal Dead Zone
    let myVar = "hello";
} catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // Cannot access 'myVar' before initialization
}

// Example 3: Calling a function that doesn't exist
try {
    calculateSalary(5000);  // This function was never defined
} catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // calculateSalary is not defined
}

// var vs let/const behavior: 
// var is hoisted so it won't throw a ReferenceError — it just returns undefined. 
// let and const are in the Temporal Dead Zone before their declaration line, so they throw a ReferenceError if accessed early. This is actually safer behavior!

console.log(a);  // undefined — no error (var is hoisted)
var a = 10;

console.log(b);  // ReferenceError! (let is in Temporal Dead Zone)
let b = 10;











// 6. SyntaxError — Invalid Syntax, Code Can't Be Parsed
// Thrown when the JavaScript parser encounters code that doesn't follow the language's grammar rules. In most cases this stops your script from running at all. However, it can be caught at runtime when evaluating strings as code (like JSON.parse or eval).

// Example 1: Invalid JSON (most common real-world case)
try {
    let data = JSON.parse("{ name: 'Ali', age: 25 }");  // Keys need quotes!
} catch (error) {
    console.log(error.name);    // SyntaxError
    console.log(error.message); // Expected property name or '}' in JSON
}

// Example 2: Correct JSON format
try {
    let data = JSON.parse('{ "name": "Ali", "age": 25 }');  // Valid!
    console.log(data.name);  // Ali
} catch (error) {
    console.log("Parsing failed:", error.message);
}

// Example 3: eval() with broken syntax
try {
    eval("function (");  // Incomplete function declaration
} catch (error) {
    console.log(error.name);    // SyntaxError
    console.log(error.message); // Unexpected token ')'
}

// Example 4: Practical usage — safe JSON parsing function
function safeParseJSON(jsonString) {
    try {
        return { success: true, data: JSON.parse(jsonString) };
    } catch (error) {
        if (error instanceof SyntaxError) {
            return { success: false, error: "Invalid JSON: " + error.message };
        }
        throw error;  // re-throw unexpected errors
    }
}

console.log(safeParseJSON('{"name": "Ali"}'));   // { success: true, data: { name: 'Ali' } }
console.log(safeParseJSON('{bad json}'));          // { success: false, error: "Invalid JSON: ..." }