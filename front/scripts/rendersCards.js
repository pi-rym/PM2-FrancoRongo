const movieCards = document.getElementById ("movieCards");
const rendersCards = (data) => {
    data.forEach(movie => {
        insertInHtml(movie)
    })
    
 
};

function insertInHtml (movie) {
    const movieElement = document.createElement ("article");
    const divMovie = document.createElement ("div");
    movieElement.classList.add("articleMovie");
    divMovie.classList.add("divMovie");
    movieElement.innerHTML=`<img src="${movie.poster}" alt="${movie.title}" class= "movieImg">`
    divMovie.innerHTML= ` <h3>${movie.title} (${movie.year})</h3>
    <p><strong>Director:</strong> ${movie.director} </p>
    <p><strong>Duracion:</strong> ${movie.duration} </p>
    <p><strong>Genero:</strong> ${movie.genre} </p>
    <p><strong>Rate:</strong> ${movie.rate} </p>
    `
    movieCards.appendChild(movieElement);
    movieElement.appendChild(divMovie);
}

module.exports = rendersCards;