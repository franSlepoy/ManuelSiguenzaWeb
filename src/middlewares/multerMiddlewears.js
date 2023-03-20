const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/imagenes"));
    },
    filename: function (req, file, cb) {
      cb(null, 'obra' + Date.now()+path.extname(file.originalname))
    }
  });
  
  const uploadFile = multer({ storage: storage })
  
  module.exports = uploadFile