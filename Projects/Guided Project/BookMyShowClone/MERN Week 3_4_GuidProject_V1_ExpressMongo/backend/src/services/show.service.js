const Show = require("../models/Show");
const Movie = require("../models/Movie");

// Generate Seats
const generateSeats = (totalSeats) => {
    const seats = {};
    const rows = ["A","B","C","D","E","F","G","H"];
    let seatCount = 0;
    for (let row of rows){
        for(let i = 1; i<=10; i++){
            if(seatCount>=totalSeats) break;

            seats.push({
                seatNumber:`${row}${i}`,
                isBooked: false
            });
            seatCount++;
        }
    }
    return seats;
};

// Create Show
exports.createShow = async({movieId,date,time,totalSeats}) => {
    // check if  movie exists
    const movie = await Movie.findById(movieId);
    if(!movie)
        throw new error("Movie not found");

    // Generate Seats
    const seats = generateSeats(totalSeats);

    const show = await Show.create({
        movieId,
        date,
        time,
        totalSeats,
        avialableSeats:totalSeats,
        seats,
    });
    return show;
};

// Get show
exports.getShows = async({movieId,date})=>{
    const filter = {isActive:true};

    if(movieId) filter.movieId = movieId;
    if(date) filter.date = new Date(date);

    const shows = await show.find(filter)
    .populate("movieId")
    .sort({date:1});

    return shows;
};

// Get show by id
exports.getShowById = async (id)=>{
    const show = await show.findById(id).populate("movieId");
    if(!show)
        throw new Error("Show not found");

    return show;
};

// Update show

exports.updateShow = async(id,data)=>{
    const show = await Show.findByIdAndUpdate(id,data,{
        returnDocument: "after",
        runValidatore: true,
    });
    if(!show)
        throw new Error("Show not found");

    return show;
};

//Delete Movie -- soft delete
exports.deleteShow = async (id) => {
    //Soft delete
    const show = await show.findByIdAndUpdate(id,{
        isActive:false,
    }); 
    if(!show)
        throw new Error("show not found");
};