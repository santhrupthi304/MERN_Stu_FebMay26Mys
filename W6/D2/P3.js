// Event loop with multiple asynchronous tasks
console.log("Main script started.");

// Task-1
setTimeout(() => {
    console.log("Timer A Finished after 500ms");
},500);

// Task-2
setTimeout(() => {
    console.log("Timer B Finished after 100ms");
},100);

// Task-3
setTimeout(() => {
    console.log("Timer C Finished after 0ms,but still waits for sync code to complete");
},0);

console.log("Main script ended");