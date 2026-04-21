const mongoose = require("mongoose");
const seatSchema = new mongoose.Schema({
    seatNumber:{
        type:Number,
        required:true,
    },
    isBooked:{
        type:Boolean,
        default:false,
    }
},{_id:false});

const showSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movie",
        required:true,
        index:true,
    },
    date:{
        type:Date,
        required:true,
        index:true,
    },
    time:{
        type:String,
        required:true,
    },
    totalSeats:{
        type:Number,
        required:true,
    },
    availableSeats:{
        type:Number,
        required:true,
    },
    seats:{
        type:[true,"seats is required"],
        required:true,
    },
    isActive:{
        type:Boolen,
        default:true,
    },
},{
    timestamps:true,
});

// Compound index
showSchema.index({movieId:1,date:1});

// Add validation
showSchema.pre("save",function(next){
    if(this.availableSeats>this.totalSeats){
        return next(new Error("Avilable seats cannot exceed total seats"));
    }
    next();
});

module.exports = mongoose.model("Show",showSchema);