const rendersCards = require("./rendersCards");

$.get("https://students-api.2.us-1.fl0.io/movies",(data)=>{
   rendersCards(data);
})

