const express = require("express");

const app = express();

const puerto = 2187;

const cors = require("cors");



//---------------------------------------------

const { getVideojuego, getVideojuegoById } = require ("./controlador/videojuego.controlador")

app.use(cors());

app.get("/", getVideojuego )

app.get("/:id" , getVideojuegoById)


//---------------------------------------------


app.listen( puerto , ()=>{
    console.log(`Hola, servidor funcionando correctamente.`);
    console.log(`Servidor ${puerto} conectado correctamente `);

});