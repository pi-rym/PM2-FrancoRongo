//Este index define las rutas.
const Router = requiere ("express")
const moviesRoute = requiere("./moviesRoute.js")

const router = Router()

router.use("/movies",moviesRoute)

module.exports = router