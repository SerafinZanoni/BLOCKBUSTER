const { Router } = require("express");
const moviesController = require("../controllers");
const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/movies", moviesController.getAllMovies);
moviesRouter.post("/movies", validateMovie, moviesController.createMovie);

// moviesRouter.get("/title/:title", moviesController.findMovieByTitle);
// moviesRouter.get("/:id", moviesController.getMovieById);


module.exports = moviesRouter;
