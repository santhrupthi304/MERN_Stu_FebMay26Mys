// Chaining promises with centralized error handling

function validateLogin(){
    return new Promise(function(reslove){
        setTimeout(function(){
            reslove("Login Vaidated");
        },400);
    });
}
function fetchAccountData(){
    return new Promise(function(reslove,reject){
        setTimeout(function(){
            const accountFound = true;   // false;
            if(accountFound){
                reslove("Account data loaded.")
            }else{
                reject("Account data could not be found ");
            }
        },700);
    });
}
validateLogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountMessage){
    console.log(accountMessage);
})
.catch(function(error){
    console.log("Chain error",error);
});