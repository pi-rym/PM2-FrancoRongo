const express = require('express');
const app = express()
const PORT = 3000; 

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});

module.exports = app;