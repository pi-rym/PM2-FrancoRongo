const getMoviesService = require("../services/getMoviesService");
const createMovieService = require("../services/createMovieService");

const getMoviesController = async (req, res) => {
    try {
        const movies = await getMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createMovieController = async (req, res) => {
    try {
        const movieData = req.body; // Datos de la película enviados en el body de la solicitud
        const newMovie = await createMovieService(movieData);
        res.status(201).json(newMovie); // Devolver el objeto de la película creada con el status 201 (Created)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getMoviesController: getMoviesController,
    createMovieController: createMovieController
};