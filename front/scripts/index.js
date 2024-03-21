const axios = require("axios");
const rendersCards = require("./rendersCards");
const apiUrl= "http://localhost:3000/movies";

axios.get(apiUrl)
  .then(response => {
     rendersCards(response.data);
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });


    