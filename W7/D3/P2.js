// Handling Asynchronous errors with callbacks
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/file",function(req,res,next){
    const filePath = path.join(__dirname,"newfile.txt");
    fs.readFile(filePath,"utf-8",function(error,data){
        if(error){
            // forward the async error
            return next(error);
        }
        res.send(data);
    });
});

// Centeralized error handling middleware
app.use(function(error,req,res,next){
    res.status(400).json({
        success:false,
        message:"File/folder does not exist",
        // OriginalMessage:error.message
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});