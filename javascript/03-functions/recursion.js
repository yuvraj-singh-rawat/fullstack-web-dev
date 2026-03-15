// Iterative Approach

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(2, 3));

// Recursive Approach
// A recursion is to call a function from within itself.

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(2));




// Power
function poww(x, n) {
    if (n == 1) return x;
    else return x * poww(x, n - 1);
}

console.log(pow(2, 3));



// Fibonacci Number

function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 2) + fib(n - 1);
};

fib(0); // 0
fib(1); // 1
console.log(fib(5)); // 5