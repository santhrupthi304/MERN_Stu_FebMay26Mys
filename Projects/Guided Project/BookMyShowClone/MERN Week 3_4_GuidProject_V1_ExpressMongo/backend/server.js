// Load environamnet variables
require("dotenv").config();

const { connection } = require("mongoose");
const app = require("./app");
const connectDB = require("./src/config/db");

// Connect DB
connectDB();

// port config
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port $(PORT)`);
});