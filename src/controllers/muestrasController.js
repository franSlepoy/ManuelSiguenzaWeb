const { response, json } = require("express");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

const muestrasFilePath = path.join(__dirname, "../data/muestras.json");
const muestra = JSON.parse(fs.readFileSync(muestrasFilePath, "utf-8"));

const muestrasController = {
    index : (req,res) => {
        return res.render(path.join(__dirname, "../views/muestras/muestras"), {muestra});
    },
    detail : (req, res) =>{
        let id = req.params.id;
        const muestraElegida = muestra.find((muestra) => muestra.id == id)
        return res.render(path.resolve(__dirname, "../views/muestras/muestraDetalle"), {muestraElegida})
        
    },

}

module.exports = muestrasController