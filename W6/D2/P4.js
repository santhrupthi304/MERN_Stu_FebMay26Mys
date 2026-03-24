// Using the EventEmiiter class
const EventEmiiter = require("events");

// Create a new event emitter instance
// This object can publish events and allow listeners to subscribe
const orderEmiiter = new EventEmiiter();

// Register a listener for the "OrderPlaced" event.
// Whenever the event is emitted, the function will execute.
// once() registers a listner that automatically removes itself after running for the first time
orderEmiiter.once("OrderPlaced",
    function(orderId,customeName,orderValue){
        console.log("Bill Amount", orderValue);
        console.log("Hello", customeName);
        console.log("Waiting for restaurant to set order.",orderId);
    }
);
orderEmiiter.on("OrderPlaced",
   function(orderId,customeName){
        console.log("Hello", customeName);
        console.log("Restaurant acceped order.",orderId);
    }
);
orderEmiiter.on("OrderPlaced",
    function(orderId,customeName){
        console.log("Hello", customeName);
        console.log("Assigning delivery partner.");
    }
);
orderEmiiter.on("OrderPlaced",
    function(orderId,customeName){
        console.log("Hello", customeName);
        console.log("Ramesh is delivering your order.",orderId);
    }
);
// Emit the event with extra data
// The listener receives the orderId value.
orderEmiiter.emit("OrderPlaced","ORD-2403001","Sonu",25000);
orderEmiiter.emit("OrderPlaced","ORD-2403001","Sonu",25000);

