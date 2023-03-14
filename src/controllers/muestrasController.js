const { response, json } = require("express");
const fs = require("fs");
const path = require("path");

const muestrasFilePath = path.join(__dirname, "../data/muestras.json");
const muestra = JSON.parse(fs.readFileSync(muestrasFilePath, "utf-8"));

const muestrasController = {
    index : (req,res) => {
        return res.render(path.join(__dirname, "../views/muestras/muestras"), {muestra});
    }
}

module.exports = muestrasController