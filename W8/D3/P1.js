// Validation and Schema constraints
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age : {type:Number, min:18},
    role:{type:String,
        enum : ["admin","user","manager"]
    },
    email :{
        type:String,
        match:/.+@.+\..+/
        // word@domainname.com   .co.in /.org /.edu.in
    }
});

const user = mongoose.model("HookValidationUser",userSchema);

async function runValidationDemo(){
    try{
        const invalidUser = new user({
            age : 15,
            role : "guest",
            email: "notValidemail"
        });

        await invalidUser.validate();
        // const validUser = new user({
        //     name:"sonu",
        //     age : 15,
        //     role : "admin",
        //     email: "s@s.com"
        // });
        // await validUser.validate();
    }
    catch(error){
        console.log("Validation error found:");

        for(const fieldName in error.errors){
            console.log(fieldName +":",error.errors[fieldName].message);
        }
    }
}
runValidationDemo();