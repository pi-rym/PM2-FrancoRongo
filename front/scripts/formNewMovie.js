
document.getElementById("movieForm").addEventListener("submit",submitForm);

function formClean (){
    document.getElementById("movieForm").reset();
} 

function submitForm(event) {
    event.preventDefault();
    const formData = new FormData (event.target);

    const title = formData.get("title")
    const year = formData.get("year") 
    const director = formData.get("director") 
    const genre = document.querySelectorAll("input[name='genre']:checked")
    const rate = formData.get("rate")
    const poster = formData.get("poster") 
    const duration= formData.get("duration")

    if(!title || !year || !director || !rate || !poster || !duration || genre.length === 0 ){
        alert(" Por favor completa todos los campos y selecciona por lo menos un genero");
        return ;
    }
    
    const yearInput = parseInt (year);
    if (isNaN(yearInput)  || (yearInput < 1800  || yearInput > 2030)) {
        alert('El año debe estar entre 1800 y 2030.');
        return;
    }
    
    const selectedGenres = Array.from(genre).map(checkbox => checkbox.value)

    axios.post("http://localhost:3000/movies", {
        
        title:title,
        director:director,
        rate:rate,
        poster:poster,
        duration:duration,
        year:yearInput,
        genre:selectedGenres,

    })
    .then(response=>{
        alert("La pelicula se ha creado correctamente");
        console.log(response.data)
        formClean();
    })
    .catch(error=>{
        console.error("Error al enviar los datos: ", error);
        alert("Hubo un error al crear la pelicula, por favor intenta de nuevo");

    });

}







