const path = require("path");
const { validationResult } = require("express-validator")
const fetch = require("node-fetch"); 
const { response } = require("express");


const usersController = {
        registro:  (req, res) => {
            fetch("https://restcountries.com/v3.1/all")
              .then(response => response.json())
              .then(countries => {
                countries.sort((a,b) =>{
                    if(a.name.common > b.name.common ){
                        return 1
                    }if(a.name.common < b.name.common){
                        return -1;
                    }
                    return 0
                })
                res.render(path.join(__dirname, "../views/users/registro"), { countries:countries });
              })
            
        },
        procesoRegistro: (req, res) =>{
            const resultValidation = validationResult(req);
            
            if(resultValidation.errors.length > 0){
                return res.render(path.join(__dirname, "../views/users/registro"),
                {errors: resultValidation.mapped(),
                oldData: req.body   
                });
            }
            res.send("Bien ahí, completaste bien la información");
        },

        login:  (req, res) => {
            res.render(path.join(__dirname, "../views/users/login"));
        },
        profile: (req, res) => {
            res.render(path.join(__dirname, "../views/users/profile"));
        },
}

module.exports = usersController;
