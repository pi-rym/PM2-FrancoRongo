const Movie = require('../models/movie');

const getMoviesService = async () => {
    try {
        console.log("Intentando conectar a la base de datos...");
        const movies = await Movie.find();
        console.log("Películas encontradas:", movies);
        return movies;
    } catch(error) {
        console.error("Error al obtener las películas:", error.message);
        throw error; // Propaga el error para que sea manejado en otro lugar de tu aplicación
    }
};

module.exports = getMoviesService;
