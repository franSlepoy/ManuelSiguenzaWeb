const express = require("express");
const router =  express.Router();
const path = require("path");
const obrasController = require("../controllers/obrasController")
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

router.get("/", obrasController.index);
router.get("/menuMobile", obrasController.menuMobile);
router.get("/bio", obrasController.bio);
router.get("/detalleObra/:id", obrasController.detail)

router.get("/crear", obrasController.crear);
router.post("/crear", upload.single("imagen"), obrasController.store);

router.get("/editar/:id", obrasController.editar);

module.exports = router;