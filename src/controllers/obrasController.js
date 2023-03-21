const { response, json } = require("express");
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
        return res.render(path.join(__dirname, "../views/obras/detalleObra"), {obraElegida})
    },
    crear: (req,res) => {
        res.render(path.join(__dirname, "../views/obras/crear"));
    },
    store: (req, res) => {
		let nuevaObra = {
			id: obras.length == 0? 1: obras[obras.length - 1].id + 1,
            nombre_ano: req.body.nombre_ano ,
            descripcion: req.body.descripcion ,
            precio: req.body.precio,
            imagen: req.file.filename,
   
    }
	obras.push(nuevaObra);
	let nuevaObraGuardar = JSON.stringify(obras,null,2);
	fs.writeFileSync(path.resolve(__dirname, "../data/obras.json"), nuevaObraGuardar);
	
	res.redirect("/");
},
    editar: (req,res) => {
        const obraId = req.params.id;
        let obraEditar = obras.find(obra=> obra.id == obraId);
        res.render(path.join(__dirname, "../views/obras/editar"), {obraEditar})
    },
    update: (req,res) => {
        const id = req.params.id;
        const obra = {
            id,
            ...req.body
        }
        guardarObra(obra)
        return res.redirect("/")
    },
   
   destroy: (req,res)=>{
    eliminarObra(req.params.id);
    return res.redirect("/")
 }
}
function getObraLista(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}
function guardarObra(obraGuardar){
    const obra = getObraLista(obrasFilePath);

    const obraLista = obras.map(ob => {
        if(ob.id == obraGuardar.id){
            return obraGuardar
        }
        return ob;
    });
    fs.writeFileSync(obrasFilePath, JSON.stringify(obraLista,null,2))
}
function eliminarObra(id){
    let obras = getObraLista(obrasFilePath);
    obras = obras.filter( obra => obra.id != id);
    fs.writeFileSync(obrasFilePath, JSON.stringify(obras,null,2));
}  



module.exports = obrasController
