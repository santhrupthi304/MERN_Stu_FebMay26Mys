// Combining multiple promise-based steps with async/await

function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },500);
    });
}

function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:orderId,
            product:"Laptop",
            quatity:2
        });
        },700);
    });
}

async function showOrederSummary(){
    const orderId = await getOrderId();
    console.log("Order Id: ",orderId);

    const OrderDetails = await getOrderDetails(orderId);
    console.log("Product: ",OrderDetails.product);
    console.log("Quatity: ",OrderDetails.quatity);
}

showOrederSummary();