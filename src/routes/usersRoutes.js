const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const validations = require("../middlewares/validateRegistroMiddlewear")
const usersController = require("../controllers/usersController");

router.get("/registro", guestMiddleware, usersController.registro);
router.post("/registro", validations, usersController.procesoRegistro);

router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.loginProcess);

router.get("/profile", authMiddleware, usersController.profile);
router.get("/logout", authMiddleware, usersController.logout);


module.exports = router;