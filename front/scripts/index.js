const axios = require("axios");
const rendersCards = require("./rendersCards");
const apiUrl= "https://students-api.up.railway.app/movies";

//$.get("https://students-api.2.us-1.fl0.io/movies",(data)=>{
 //  rendersCards(data);
//})

axios.get(apiUrl)
  .then(response => {
     rendersCards(response.data);
    
    //console.log('Respuesta de la API:', response.data);
  })
   .catch(error => {
    
    console.error('Error al obtener datos:', error);
  });