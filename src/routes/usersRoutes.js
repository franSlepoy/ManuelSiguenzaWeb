const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
 

const usersController = require("../controllers/usersController");

const validations = [
    body("nombreCompleto").notEmpty().withMessage("Tenés que escribir tu nombre comleto"),
    body("email").notEmpty().withMessage("Tenés que escribir tu email").bail()
                 .isEmail().withMessage("Tenés que escribir un formato válido"),
    body("contraseña").notEmpty().withMessage("Tenés que escribir una contraseña"),
    //body("pais").notEmpty.withMessage("Tenés que elegir un país"),
];

router.get("/registro", usersController.registro);
router.post("/registro", validations, usersController.procesoRegistro);

router.get("/login", usersController.login);
router.get("/profile/:userId", usersController.registro);

module.exports = router;