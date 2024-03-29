const { body } = require("express-validator");

const validations = [
    body("nombreCompleto").notEmpty().withMessage("Tenés que escribir tu nombre comleto"),
    body("email").notEmpty().withMessage("Tenés que escribir tu email").bail()
                 .isEmail().withMessage("Tenés que escribir un formato válido"),
    body("password").notEmpty().withMessage("Tenés que escribir una contraseña"),
    //body("pais").notEmpty.withMessage("Tenés que elegir un país"),
];

module.exports = validations;