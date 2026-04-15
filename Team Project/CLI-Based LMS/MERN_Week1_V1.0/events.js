const EventEmitter = require('events');

// Create a single EventEmitter instance
const emitter = new EventEmitter();

// emitter.on("enrollmentStarted",(courseTitle=>{
//     console.log("Course Title : ",courseTitle);
    
// }))


module.exports = emitter;