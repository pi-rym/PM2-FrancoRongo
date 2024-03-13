const Router= require ("express")
const moviesController = require("../controllers/moviesController.js")

const moviesRoute = Router()

moviesRoute.get("/movies",(moviesController))

module.exports = moviesRoute