// Basics of Objects

const person ={
    name:"Sonu",
    age:20,
    isStudent: false
};
console.log("Person",person);
console.log("Name",person.name);
console.log("Age",person["age"]);

// Add a new property
person.city = "Mysore";
console.log("person",person);
// Modify
person.age = 31;
console.log("person",person);
// delete
delete person.isStudent;
console.log("Person",person);

// Object constructor
const car = new Object();
car.make = "BMW";
car.model = "M4";
car.year = 2026;
console.log("Car",car);