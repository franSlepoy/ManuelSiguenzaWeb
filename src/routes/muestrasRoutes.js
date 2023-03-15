const express = require("express");
const router =  express.Router();
const path = require("path");
const muestrasController = require("../controllers/muestrasController")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/imagenes"));
    },
    filename: function (req, file, cb) {
      cb(null, 'obra' + Date.now()+path.extname(file.originalname))
    }
  });
  
  const upload = multer({ storage: storage })

  router.get("/", muestrasController.index);
  router.get("/muestraDetalle/:id", muestrasController.detail);

  module.exports = router;