// Reduce method
let nums = [5,10,15];

let total = nums.reduce((intermediateSum,current)=> intermediateSum+current,0);
console.log(total);

// differnet way of finding average
console.log("Average",total/3);   
// console.log("Average",total/nums.length);
// console.log(total/nums.length);
 
// let avg = total / nums.length;
// console.log(avg);

// Reduce to obejct count by category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((intermediateValue,item) => {
     intermediateValue[items] = 
     (intermediateValue[items] || 0) + 1;
     return a;
},{});
console.log("Items count: ", count);
