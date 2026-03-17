function invoice(gstRate = 0.18, ...items) {
    let subtotal = 0;

    for (let item of items) {

        if (item.name === "STOP") {
            break;
        }

        if (!item.price || !item.quty || item.price <= 0 || item.quty <= 0) {
            continue;
        }

        subtotal += item.price * item.quty;
    }

    const gst = subtotal * gstRate;
    const total = subtotal + gst;

    return {
        subtotal: subtotal,
        gst: gst,
        total: total
    };
}

const result = invoice(
    0.18,
    { name: "Pen", price: 10, quty: 3 },
    { name: "Book", price: 50, quty: 2 },
    { name: "Pencil", price: -5, quty: 4 }, 
    { name: "STOP" },
    { name: "Bag", price: 100, quty: 1 } 
);

console.log(result);