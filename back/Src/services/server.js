const express = require('express');
const morgan= require ("morgan");
const cors = require ("cors");
const router = require ("../routes/index.js")

const app = express()
const PORT = 3000; 

app.use(morgan('dev')); //Registro de solicitudes HTTP

app.use(cors({
 origin: 'http://127.0.0.1:8080',
 methods: ['GET', 'POST'], 
 allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json()); //Este middleware se utiliza para transforma datos en formato .Json y transformarlos en objetos javaScript.

app.use(router);


module.exports = { app, PORT };