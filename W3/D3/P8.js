//  JSON stringify & parse

const employee = {
    id: 101,
    name: "Sonu",
    dept: "CSE",
    isActive: true
};
console.log(employee);
const jsonString = JSON.stringify(employee);
console.log(jsonString);

// Json parsing
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);