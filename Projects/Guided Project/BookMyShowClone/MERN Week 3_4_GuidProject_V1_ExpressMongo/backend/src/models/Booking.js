const mongoose = required("mongoose");
const bookingSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Type.ObjectId,
        ref:"User",
        required:true,
        index:true,
    },
    showId:{
        type: mongoose.Schema.Type.ObjectId,
        ref:"show",
        required:true,
        index:true,
    },
    seats:{
        type:[String],
        required:true,
    },
    totalSeats:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["booked","cancelled"],
        default:"booked",
        index:true,
    },
    bookingTime:{
        type:Date,
        default:Date.now(),
    },
},
{
    timestamps:true,
});

// Add validation
bookingSchema.pre("save",function (){
    if (this.seats.length === 0){
        // return next(new Error("At least one seat must be selected"));
        throw new error("At least one seat must be selected");
    }
    if(this.totalSeats!=this.seats.length){
        // return next(new Error("Seats count mismatch "))
        throw new error("Seats count mismatch");
    }
});

// Compound index
bookingSchema.index({userId:1,showId:1});

module.exports = mongoose.model("Booking",bookingSchema);