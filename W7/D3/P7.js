// Protecting router with JWT middleware and role based access
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const secretKey = "monkey123";

const userToken = jwt.sign({ userId: 1, role: "user", email: "sonu@gmail.com" }, secretKey, { expiresIn: "1h" });
console.log("usertoken:" ,userToken);
const adminToken = jwt.sign({ userId: 2, role: "admin", email: "santhu@gmail.com" }, secretKey, { expiresIn: "1h" });
console.log("admintoken:" ,adminToken);

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            succes: false,
            message: "authorization header is missing"
        });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            succes: false,
            message: "bearer token is missing"
        });
    }
    try {
        // verify the token and attach trusted user data to the request
        req.user = jwt.verify(token, secretKey);
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                succes: false,
                message: "Token has expired"
            });
        }
        return res.status(403).json({
            succes:false,
            message:"Token is Invalid"
        });
    }
}

function requireRole(role){
    return function(req,res,next){
        if(req.user,role=role){
            return res.status(403).json({
                succes:false,
                message:"Insufficent permission"
        });
        }
        next();
    };
}

app.get("/me",authenticateToken,function(req,res,next){
    res.json({
        success:true,
        message: "Protected user route accessed.",
        user:req.user
    });
});

app.get("/admin",authenticateToken,requireRole("admin"),function(req,res,next){
    res.json({
        success:true,
        message: "Protected user route accessed.",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT protedted route server running @ http://localhost:4000");
});