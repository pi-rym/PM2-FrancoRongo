const { app,PORT } = require('./Src/services/server');
const dbConnection = require('./Src/config/dbConnection');

dbConnection ()
.then (()=>{
   app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
})
