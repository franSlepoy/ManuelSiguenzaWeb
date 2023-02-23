const express = require("express");
const router =  express.Router();
const obrasController = require("../controllers/obrasController")

router.get("/", obrasController.index);
router.get("/menuMobile", obrasController.menuMobile);
router.get("/bio", obrasController.bio);
router.get("/detalleObra/:id", obrasController.detail)

router.get("/crear", obrasController.crear);

module.exports = router;