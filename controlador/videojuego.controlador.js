const {request, response} = require("express");
const{equipos} = require("../videojuego")

const {videojuego} = require ("../videojuego");

const getVideojuego = (req, res) =>{

    return res.json({

        ok:true,
        statusCode:200,
        videojuego

    });
    
}

const getVideojuegoById = (req = request, res = response) =>{
    
    
    let id = parseInt(req.params.id);

    let videojuegoAObtener = "";

    videojuegoAObtener = videojuego.find(( videojuego )=>{
        return videojuego.id == id;


    });

    if(videojuegoAObtener){
        return res.json ({
            ok:true,
            statusCode:200,
            videojuegoAObtener

        });

        }else{
            return res.json({
              ok:true,
              statusCode:404,
              msg:"Id erroneo; No hay juegos registrados con ese ID, intenta nuevamente."
            

        });
    }
}

module.exports = {

    getVideojuego,
    getVideojuegoById
}