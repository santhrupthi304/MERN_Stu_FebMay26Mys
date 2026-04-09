// Handles request related to movie
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deletedMovie
} = require("../controllers/movieController");

const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Sends req to home page
router.get("/",getHome);
// Sends req to get all movies
router.get("/movies",getAllMovies);
// Sends req to get movies based on id
router.get("/movies/:id",getMovieById);

// Sends req to create new movies
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
// Sends req to update movie details
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
// Sends req to delete movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deletedMovie);

module.exports = router;