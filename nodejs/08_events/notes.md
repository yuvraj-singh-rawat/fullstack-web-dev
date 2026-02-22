## 1. What are Events in Node.js?

Node.js is built on an **event-driven architecture**.  
An **event** represents an action or occurrence that happens in the application, such as:
-   A file finishing its read operation
-   A request arriving at a server
-   Data being received from a stream

Node.js handles these events using the **EventEmitter** class.

## 2. EventEmitter Module

Node.js provides a built-in module called `events`.

`const  EventEmitter = require('events');` 

The `EventEmitter` class allows objects to:

-   **Emit events**
    
-   **Register listeners** that respond to those events

## 3. Creating an EventEmitter Instance

`const  EventEmitter = require('events');` 
`const emitter = new  EventEmitter();` 

Here:   `emitter` is an object that can emit and listen to events.

## 4. Registering Event Listeners (`.on()`)

### Syntax

`emitter.on(eventName, listenerFunction);` 

### Example

`emitter.on('message', () => { 
	console.log('Message event received');
});` 

### Explanation
-   `.on()` registers a listener
-   The listener runs **every time** the event is emitted

## 5. Emitting Events (`.emit()`)

### Syntax

`emitter.emit(eventName, [...arguments]);` 

### Example

`emitter.emit('message');` 

### Explanation

-   `.emit()` triggers the event
-   All listeners attached to that event are executed synchronously

## 6. Complete Basic Example

`const  EventEmitter = require('events'); 
const emitter = new  EventEmitter();

emitter.on('greet', () => { 
	console.log('Hello from EventEmitter');
});

emitter.emit('greet');`


## 7. Passing Data with Events

Events can carry data as arguments.

### Example

``emitter.on('userCreated', (username, age) => { 
	console.log(`User: ${username}, Age: ${age}`);
});``

`emitter.emit('userCreated', 'Yuvraj', 22);`

### Explanation

-   Arguments passed in `.emit()` are received by the listener
-   This enables data-driven communication

## 8. One-Time Event Listener (`.once()`)

### Syntax
`emitter.once(eventName, listener);` 

### Example
`emitter.once('login', () => { 
	console.log('User logged in for the first time');
});`

`emitter.emit('login');
emitter.emit('login');`

### Explanation

-   The listener executes **only once**
-   Automatically removed after execution

## 9. Removing Event Listeners

### Remove a specific listener

`emitter.off('eventName', listener);` 

### Remove all listeners

`emitter.removeAllListeners('eventName');`

## 10. Error Event (Critical Concept)

If an `error` event is emitted and **no listener is attached**, the application will crash.

### Correct Way
```
emitter.on('error', (err) => { 
	console.error('Error occurred:', err.message);
});
emitter.emit('error', new  Error('Something went wrong'));
```

### Explanation

-   Always handle the `error` event    
-   Prevents unexpected application termination

## 11. EventEmitter Execution Flow

-   Events are handled **synchronously**
-   Listeners are executed in the **order they are registered**
    
```
emitter.on('task', () =>  console.log('Task 1'));
emitter.on('task', () =>  console.log('Task 2'));
```

`emitter.emit('task');` 

### Output

`Task  1  
Task  2`

## 12. Inheritance from EventEmitter

Custom classes can extend `EventEmitter`.

### Example

```
const  EventEmitter = require('events'); 
	class  Order  extends  EventEmitter { placeOrder(orderId) { 		console.log('Order placed'); 
	this.emit('orderPlaced', orderId);
  }
} const order = new  Order();

order.on('orderPlaced', (id) => 
{ console.log(`Processing order: ${id}`);
});
```

`order.placeOrder(101);`


## 13. Real-World Usage of Events

Node.js core modules rely heavily on events:

-   `http` → request, response
-   `fs` → open, close, read
-   `stream` → data, end, error
-   `process` → exit, uncaughtException

### Example

`process.on('exit', () => { console.log('Node process is exiting');
});` 

## 14. Event-Driven Architecture (EDA)

### Characteristics

-   Loose coupling
-   High scalability
-   Non-blocking behavior
-   Efficient resource usage

### Flow

`Event Occurs → Event Emitted → Listener Executes`

## 16. Advantages of Using Events

-   Improves scalability
-   Encourages modular code
-   Enables asynchronous communication
-   Core foundation of Node.js