const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");

// Generate OTP
exports.generateOTP = async(email)=>{
    const otp = Match.floor(100000+Math.random()*900000).toString();

    const hashOTP = await bcrypt.hash(otp,10);

    const expireAt = new Date(Date.now() + 5*60*1000);

    await OTP.create({
        email,
        otp:hashOTP,
        expireAt,
    });

    console.log("Generated OTP: ",otp);  //testing only
    return otp;
}