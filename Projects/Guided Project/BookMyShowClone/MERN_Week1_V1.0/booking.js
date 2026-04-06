// Handles booking related operations
const bookingEmitter = require("./events");

let currentBooking = null;

function getCurrentBooking(){
    return currentBooking;
}

function clearCurrentBooking(){
    currentBooking = null;
}

function checkDuplicateBooking(movie,showtime,seatCount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(
                currentBooking &&
                currentBooking.movieId === movie.id &&
                currentBooking.time === showtime.time &&
                currentBooking.seatCount === seatCount
            ){
                return reject("Duplicate booking detected. Ticket already booked");
            }
            resolve("No duplicate booking found");
        },300);
    });
}

function checkSeatsAvailability(showtime,seatCount){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(showtime.seatsavailable < seatCount){
                return reject(`Only ${showtime.seatsavailable} seats are available`);
            }
            resolve("Seats are available");
        },300);
    });
}

function generateBookingDeatails(movie,showtime,seatCount){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const booking = {
                bookingId : `BOOK-$(Date.now())`,
                movieId: movie.id,
                movieTitle: movie.title,
                time: showtime.time,
                seatCount: seatCount
            };
            resolve(booking);
        },300);
    });
}

function confirmBooking(booking,showTime){
    return new Promise((resolve)=>{
        setTimeout(() => {
            showtime.seatsavailable -= booking.seatCount;
            currentBooking = booking;
            bookingEmitter.emit("bookingConfirmed", booking);
        }, 300);
    });
}

// Promise chaining
function processBooking(movie,showtime,seatCount){
    bookingEmitter.emit("bookingStarted");
    return checkDuplicateBooking(movie,showtime,seatCount)
    .then(()=>{
        bookingEmitter.emit("bookingValidated");
        return checkSeatAvailability(showtime,seatCount);
    })
    .then(()=>generateBookingDetails(movie,showtime,seatCount))
    .then((booking)=>confirmBooking(booking,showtime))
    .catch((error)=>{
        bookingEmitter.emit("bookingFailed",error);
        throw error;
    });
}

// Async/Await
async function processBookingAsync(movie,showtime,seatCount){
    try{
        bookingEmitter.emit("bookingStarted");
        await checkDuplicateBooking(movie,showtime,seatCount);
        bookingEmitter.emit("bookingValidated");
        await checkSeatAvailability(showtime,seatCount);
        const booking = await generateBookingDetails(movie,showtime,seatCount);
        const confirmBooking = await confirmBooking(booking,showtime);
        return confirmBooking;
    }
    catch(error){
        bookingEmitter.emit("bookingFailed",error);
        throw error;
    }
}

module.exports = {
    getCurrentBooking,
    clearCurrentBooking,
    processBooking,
    processBookingAsync
};