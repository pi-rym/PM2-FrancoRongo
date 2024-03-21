const Movie = require("../models/Movie");

const createMovieService = async (movieData) => {
    try {
        console.log("Intentando conectar a la base de datos para crear una película...");
        const newMovie = new Movie(movieData);
        const createdMovie = await newMovie.save();
        console.log("Película creada:", createdMovie);
        return createdMovie;
    } catch(error) {
        console.error("Error al crear la película:", error.message);
        throw error; 
    }
};

module.exports = createMovieService;