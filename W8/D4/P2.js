// Timestamp and advanced queries
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const schema = new mongoose.Schema(
            {
                name: String,
            },
            {
                timestamps: true
            }
        );

        const Model = mongoose.model('DateFund', schema);

        // await Model.deleteMany();

        // await Model.create([
        //     { name: "Amogh" },
        //     { name: "suman" },
        //     { name: "Bharath" },
        //     { name: "shalini" }
        // ]);

        const recent = await Model.find({
            createdAt:{
                $gte: new Date(Date.now()-900000)
            }
            
        }).sort({createdAt:-1});           // to display the old date which runs before the timespan given
        console.log("Recent:",recent);
    }
    catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB.")
    }
}
main();