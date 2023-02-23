const { response } = require("express");
const fs = require("fs");
const path = require("path");

const obrasFilePath = path.join(__dirname, "../data/obras.json");
const obras = JSON.parse(fs.readFileSync(obrasFilePath, "utf-8"));

const obrasController = {
    index : (req,res) => {
        return res.render(path.resolve(__dirname, "../views/obras/index"), {obras});
    },
    menuMobile : (req,res) => {
        return res.render(path.resolve(__dirname, "../views/obras/menuMobile"));
    },
    bio : (req,res) => {
        return res.render(path.resolve(__dirname, "../views/obras/bio"));
    },
    detail : (req,res) => {
        let id = req.params.id;
        const obraElegida = obras.find((obra) => obra.id == id)
        return res.render(path.resolve(__dirname, "../views/obras/detalleObra"), {obraElegida})
    },
    crear: (req,res) => {
        res.render(path.join(__dirname, "../views/obras/crear"));
    }
}

module.exports = obrasController
