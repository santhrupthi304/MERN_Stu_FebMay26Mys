const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");
const {protect} = require("../middleware/auth.middleware");

//user booking route
router.post("/",protect,bookingContoller.createBooking);
router.post("/my",protect,bookingContoller.getMyBooking);
router.post("/:id",protect,bookingContoller.cancelBooking)

module.exports = router;