// setImmediate vs setTimeout
console.log("Scheduling setTimeout and setImmediate.");

// callback timer
setTimeout(() => {
    console.log("Timer callback from setTimeout.");
}, 0);

// setImmediate callaback
setImmediate(function(){
    console.log("SetImmediate callback executed.");
});

console.log("Both callabacks are now waiting for the event loop.");