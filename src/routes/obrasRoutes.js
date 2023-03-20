const express = require("express");
const router =  express.Router();
const path = require("path");
const obrasController = require("../controllers/obrasController")
const multer = require("multer");

const uploadFile = require("../middlewares/multerMiddlewears");

router.get("/", obrasController.index);
router.get("/menuMobile", obrasController.menuMobile);
router.get("/bio", obrasController.bio);
router.get("/detalleObra/:id", obrasController.detail);

router.get("/crear/:id", obrasController.crear);
router.post("/crear", uploadFile.single("imagen"), obrasController.store);

router.get("/editar/:id", obrasController.editar);
router.put("/editar/:id", uploadFile.single("imagen"), obrasController.update);

router.delete("/eliminar/:id", obrasController.destroy);

module.exports = router;