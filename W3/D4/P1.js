// Array basics
console.log("Array Basics");
// creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"Gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

// using constructor
let fruits = new Array("Apple","Mango");
// console.log(fruits);
console.log("Is fruits is an array?", Array.isArray(fruits));

// Push(add elements)
fruits.push("cherry");
console.log(fruits);

// pop(remove elements)
fruits.pop();
console.log(fruits);

// unshift: adds to beginning
fruits.unshift("Orange");
console.log(fruits);

// shift : is to remove from beginning
fruits.shift();
console.log(fruits);

