const Router = require("express");
const moviesController = require("../controllers/moviesController.js");

const moviesRoute = Router();

moviesRoute.get("/", moviesController.getMoviesController);

moviesRoute.post("/", moviesController.createMovieController);

module.exports = moviesRoute;