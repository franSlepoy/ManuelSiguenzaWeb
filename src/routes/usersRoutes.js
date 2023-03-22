const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const validations = require("../middlewares/validateRegistroMiddlewear")
const usersController = require("../controllers/usersController");

router.get("/registro", usersController.registro);
router.post("/registro", validations, usersController.procesoRegistro);

router.get("/login", usersController.login);
router.post("/login", usersController.loginProcess);

router.get("/profile", usersController.registro);

module.exports = router;