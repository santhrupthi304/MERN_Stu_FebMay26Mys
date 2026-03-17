// Introduction to callback function
function greetUser(name,callback){
    console.log("Hello ,"+ name);
    // The callback function is executed only after the execution of the currenet function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}

greetUser("Santhurupthi",showCompletionMessage);