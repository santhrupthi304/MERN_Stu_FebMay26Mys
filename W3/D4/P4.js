// Array filter

// let marks = [75,80,49,56,70,82,45,51,68];
// let passed = marks.filter(mark => mark >= 70);

// console.log(marks);
// console.log(passed);

let students = [
    {name:"Arjun", marks:75},
    {name:"Krishana",marks:75},
    {name:"Sonu",marks:80},
    {name:"Poorna",marks:60},
    {name:"Bhanu",marks:56},
    {name:"Sinchu",marks:70},
    {name:"Nikitha",marks:68}
];
console.log(students);

let qulifiedStudent = students.filter(student => student.marks >= 70).map(student => student.name);
console.log("qulifiedStudent",qulifiedStudent);
// let qulifiedName = qulifiedStudent.map(student => student.name);
// console.log("qulifiedName",qulifiedName);
