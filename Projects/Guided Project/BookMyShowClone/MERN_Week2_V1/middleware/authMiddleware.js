// Middleware to create and or verify JWT token
const jwt = require("jsonwebtoken");
const CustomError = require("../utils/customError");

const JWT_SECRET = "TumbaSecret";

function authMiddleware(req,res,next){
    try{
        const authHeder = req.headers.authorization;
        const tokenFromHeader = authHeder && authHeder.startsWith("Bearer")?authHeder.split(" ")[1]:null;

        const token = tokenFromHeader || req.cookies.token;

        if(!token){
            return next(new CustomError("Access denied. Token not provide",401));
        }

        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(error){
        next(new CustomError("Invalid or expired token",401));
    }
}

module.exports = {
    authMiddleware,
    JWT_SECRET
};