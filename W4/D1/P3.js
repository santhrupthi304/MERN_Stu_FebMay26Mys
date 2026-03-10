// trow custom errors
function divide(a,b){
    if(b==0) {
        throw new Error("Cannot divide bye Zero");
    }
    return a/b;
}
try{
    console.log(divide(10,2));
    console.log(divide(10,0));
}
catch(err){
    console.log("Caught: ",err.message);
}

function checkAge(age){
    if(age<18) {
        throw new Error("Age must be 18 and above");
    }
    console.log("You can vote.");
    return age;
}
try{
    // console.log(checkAge(10));
    console.log(checkAge(20));
}
catch(err){
    console.log("Caught: ",err.message);
}


// Create a custom error class
class validationError extends Error{
    constructor(message){
        super(message);
        this.name="validationError";
    }
}
function createUser(name){
    if(!name){
        throw new validationError("Name is required");
    }
    console.log("Hi,"+name+ " welcome");
    return (name);
}
try{
//    createUser("");
   createUser("Santhrupthi");
}
catch(error){
    console.log(error.name +":", error.message);
}