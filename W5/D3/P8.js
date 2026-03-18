// try catch finally with async/await

function processPayment(isSucceeded){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceeded){
                resolve("Payment processed successfully.");
            }
            else{
                reject("Paymenet couldn't processed successfully");
            }
        },700);
    });
}

async function runPaymentFlow(isSucceeded) {
    try{
        const result = await processPayment(isSucceeded);
        console.log("Success ", result);
    }
    catch(error){
        console.log("Failure: ",error);
    }
    finally{
        console.log("Paymenet flow completed.");
    }
}

runPaymentFlow(false).then(function(){
    return runPaymentFlow(true);
});