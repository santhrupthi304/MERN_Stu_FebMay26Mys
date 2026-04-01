// Generating token using logIn function and verifying the token
const jwt = require("jsonwebtoken");

const secretKey = "monkey123";

const wrongSecretKey = "donkey123";

function logInUser(email,password){
    if(email === "correct@email.com" && password === "api123"){
        const token = jwt.sign(
            {
                userId:103,
                email:email,
                role:"student"
            },secretKey,{expiresIn:"1h"});
            return{
                success:true,
                token:token
            };
    }
    return{
        success:false,
        message:"Invaild Credentials"
    };
}

const loginResult = logInUser("correct@email.com","api123");
console.log("Login result: ",loginResult);

if (loginResult.success){
    try{
        const verifiedPayload = jwt.verify(loginResult.token,secretKey);
        // const verifiedPayload = jwt.verify(loginResult.token,wrongSecretKey);
        
        console.log("Verified Payload: ",verifiedPayload);
    }
    catch(error){
        console.log("Verification failed",error.message);
    }
}