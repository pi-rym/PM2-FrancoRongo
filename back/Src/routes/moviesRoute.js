const Router= require ("express")
const moviesController = require("../controllers/moviesController.js")

const moviesRoute = Router()

moviesRoute.get("/",(moviesController))

module.exports = moviesRoute