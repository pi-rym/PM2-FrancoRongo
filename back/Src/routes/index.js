//Este index define las rutas.
const Router = require ("express")
const moviesRoute = require("./moviesRoute.js")

const router = Router()

router.use("/movies",moviesRoute)

module.exports = router