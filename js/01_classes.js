// Constructor 
// The constructor is a special method that gets called automatically when a new object is created from the class. 
// It is typically used to initialize the properties of the object.
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.brand} of ${this.model} is starting...`);
    }
}

const car1 = new Car("Toyota", "Fortuner", 2023);

car1.start(); // Toyota of Fortuner is starting...
console.log(car1.brand); // Toyota







// Inheritance 
// passing down properties & methods from parent class to child class
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}

class Cars extends Vehicle {
    honk() {
        console.log("Honk! Honk!")
    }
}

let myCar = new Cars("Rolls Royce", 2026);

console.log(myCar.brand); // Rolls Royce
console.log(myCar.year); // 2026
myCar.honk(); // Honk! Honk!







// Static Properties & Methods
// Static means related to class, not related to object
// Static properties and methods belong to the class itself, not to instances of the class, and are accessed using the class name.
class User {
    static greet() {
        console.log("Hello From Static Method Class")
    }
}

User.greet();






// Super Keyword
// call constructor of its parent class to access the parent's properties and methods.
class tenth {
    constructor() {
        this.section = "a";
    }

    read() {
        console.log("read");
    }
}

class tenthB extends tenth {
    constructor(branch) {
        console.log("enter child constructor");
        super(); // to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }

    homework() {
        console.log("solve homework today");
    }
}