// const Emitter = require("./emitter") // Custom events
const Emitter = require("events"); // Core NodeJS module events
const events = require("./config").events;




// ======= Basic Example of Event Listener ======= 
const emiter = new Emitter();
    
// // Event Listener
emiter.on('hello', () => {
    console.log('Hello Event Triggered 🚀')
});

emiter.on('bye', () => {
    console.log('Bye Event Gone 🚀')
});



// // Emit Event Trigger
emiter.emit('hello');
emiter.emit('bye');

// // Run Only One Time
// emiter.once('login', () => {
//     console.log("Logged in successfully!")
// })

// emiter.emit('login');
// emiter.emit('login');



// ======= Advanced Event with Data ======= 

// emiter.on('user', (name, age) => {
//     console.log(`User : ${name}, Age: ${age}`)
// })

// emiter.emit('user', 'Yuvraj', 22)





// ======= Remove Event Listener ======= 

// emiter.off('bye', () => {
//     console.log("Event Gone")
// })

// emiter.removeAllListeners('hello');
// emiter.emit('hello');




// ======= Error Event ======= 

// emiter.on('error', (err) => {
//     console.log('Error', err.message)
// })

// emiter.emit('error', new Error('Something went wrong'))





// ======= External Data from Config ======= 
// emiter.on(events.GREET, () => {
//     console.log('Hello')
// })

// emiter.on(events.FILEOPEN, () => {
//     console.log("File Opened")
// })

// emiter.on(events.FILESAVED, () => {
//     console.log('File Saved')
// })

// emiter.emit(events.GREET)
// emiter.emit(events.FILEOPEN)
// emiter.emit(events.FILESAVED)