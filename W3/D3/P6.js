//  Nested Objects and methods 

const student = {
    firstName: "Santhu",
    lastName: "Gowda",
    scores:{
        math:80,
        science:48,
        social:89
    },
    hobbies:["reading","drawing"],
    fullname: function(){
        return this.firstName + " "+this.lastName;
    },
    greet(){
        console.log("Hi, ",this.fullname());
    },
};
console.log("Student",student);
console.log(student);
console.log(student.scores.math);
console.log(student.fullname());