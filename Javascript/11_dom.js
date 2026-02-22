// Selectors

// 1. Select by ID
// document.getElementById("elementId");

let heading = document.getElementById('head');
console.log(heading.textContent);


// 2. Select by Class
// document.getElementsByClassName("className");

const para = document.getElementsByClassName('para');
console.log(para[0].textContent);


// 3. Select By TagName
// document.getElementsByTagName("tagName");

const paras = document.getElementsByTagName("p");
console.log(paras); // HTMLCollection of 3 <p> elements

// Loop through all
for (let i = 0; i < paras.length; i++) {
    console.log(paras[i].textContent);
}

// 4. Select By Query Selectos
// document.querySelectorAll("selector");

const elements = document.querySelector(".demo");
console.log(elements.textContent);







// Event Handling
// Syntax: element.addEventListener(eventType, callbackFunction);
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Button was Clicked");
    console.log("Btn Clicked")
});

const paraOver = document.getElementById("head");
paraOver.addEventListener("mouseover", () => {
    alert("Hey what is this?")
})


// Theme Change
const modeBtn = document.getElementById("modeBtn");
const body = document.body;

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modeBtn.textContent = "Switch to Light Mode";
    } else {
        modeBtn.textContent = "Switch to Dark Mode";
    }
});