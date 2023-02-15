const express = require("express");
const router =  express.Router();
const obrasController = require("../controllers/obrasController")

router.get("/", obrasController.index);
router.get("/detalleObra/:id", obrasController.detail)

module.exports = router;