const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/imagenes");
    },
    filename: function (req, file, cb) {
      let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
    }
  });
  
  const uploadFile = multer({ storage: storage })
  
  module.exports = uploadFile