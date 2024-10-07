const { Router } = require("express");
const moviesController = require("../controllers");
const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/", validateMovie, moviesController.createMovie);

moviesRouter.use("/movies", moviesRouter);

module.exports = moviesRouter;
