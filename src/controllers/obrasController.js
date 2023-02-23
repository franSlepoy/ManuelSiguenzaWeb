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
    },
    store: (req, res) => {
		let nuevaObra = {
			id: obras.length == 0? 1: obras[obras.length - 1].id + 1,
    nombre_año: req.body.nombre_año ,
    descripción: req.body.descripción ,
    precio: req.body.precio,
    imagen: req.file.filename,
    }
	obras.push(nuevaObra);
	let nuevaObraGuardar = JSON.stringify(obras,null,2);
	fs.writeFileSync(path.resolve(__dirname, "../data/obras.json"), nuevaObraGuardar);
	
	res.redirect("/");
},

}

module.exports = obrasController
