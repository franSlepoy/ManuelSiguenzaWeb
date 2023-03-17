const path = require("path");
const { validationResult } = require("express-validator")

const usersController = {
        
        registro: (req, res) => {
            res.render(path.join(__dirname, "../views/users/registro"));
        },
        procesoRegistro: (req, res) =>{
            const resultValidation = validationResult(req);
            
            if(resultValidation.errors.length > 0){
                return res.render(path.join(__dirname, "../views/users/registro"),
                {errors: resultValidation.mapped(),
                oldData: req.body   
                });
            }
            res.send("Bien ahí, complestaste bien la información");
        },

        login:  (req, res) => {
            res.render(path.join(__dirname, "../views/users/login"));
        },
        profile: (req, res) => {
            res.render(path.join(__dirname, "../views/users/profile"));
        },
}

module.exports = usersController;
