const Router= require ("express")
const moviesController = requiere("../controllers/moviesController.js")

const moviesRoute = Router()

moviesRoute.get("/movies",(moviesController))

module.exports = moviesRoute