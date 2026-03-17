// Stack Memory => Primitive 

let name = "Yuvraj Singh Rawat";

let newName = "Yuvraj Rawat";
newName = "Yuvraj Singh";

console.log(newName); // Yuvraj Singh
console.log(name); // Yuvraj Singh Rawat






// Heap Memory => Non-Primitive

let user1 = {
    name: "Yuvraj",
    id: 1,
    address: "Ajmer"
}

let user2 = user1;

console.log(user2); // { name: 'Yuvraj', id: 1, address: 'Ajmer' }

user2.address = "Jaipur";

console.log(user1.address); // Jaipur
console.log(user2.address); // Jaipur