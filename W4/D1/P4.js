// Logging

console.log("Console logging");

console.warn("Warning message");

console.error("Error message");

let users = [
    {id:1,name:"Sonu"},
    {id:2,name:"Santhtupthi"},
];

console.log(users);
console.table(users);

// Group related logs
console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

// Measure the execution time
console.time("Loop Timer");
for(let i=0; i<1000; i++){}
console.timeEnd("Loop Timer");