const greet = () => {
    console.log("Hello World!")
}

// module.exports = welcome = () => {
//     console.log("Welcome to Node JS World")
// }

function welcome() {
    console.log("Welcome to Node JS World")
}

// module.exports = function welcome() {
//     console.log("Welcome to Node JS World")
// }

// module.exports = greet;
module.exports = {
    greet,
    welcome
}