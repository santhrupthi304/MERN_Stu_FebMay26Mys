// Handling the error event is EventEmitter
const EventEmiiter = require("events");

const fileEmitter = new EventEmiiter();

// Register an error listener 
fileEmitter.on("error",function(errorMessage){
    console.log("Emitter handler error",errorMessage);
});

// Normal event listener :  Happy scenario //on & off
fileEmitter.on("fileProcessed",function(fileName){
    console.log("File processed successfully.",fileName);
});

fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","File processing failed.");
