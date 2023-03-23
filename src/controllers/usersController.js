const path = require("path");
const { validationResult } = require("express-validator")
const fetch = require("node-fetch"); 
const { response } = require("express");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

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
            res.render(path.join(__dirname, "../views/users/registro"), { countries });
          });
        
          
        
    },
        procesoRegistro: (req, res) =>{
               const resultValidation = validationResult(req);
               if(!resultValidation.isEmpty()){
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
            
            return res.render(path.join(__dirname, "../views/users/registro"), { countries ,
            errors: resultValidation.mapped(),
            oldData: req.body   
            }); 
          });
                
                
            } else {
                let userInDB = User.findByField("email", req.body.email);

                if(userInDB) {
                    return res.render(path.join(__dirname, "../views/users/registro"), {
                      errors: {
                           email:{
                             msg: "Este email ya está registrado."
                         }
                     },
                     oldData: req.body
                    });
                }
    
                let userToCreate = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password,10)
                }
                let userCreated = User.create(userToCreate);
    
          return res.redirect("/users/login");
            }
            
    },

    login:  (req, res) => {
            res.render(path.join(__dirname, "../views/users/login"));
    },
    loginProcess: (req,res) => {
        let userToLogin = User.findByField("email",req.body.email);

        if(userToLogin){
          let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
          if(isOkThePassword){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            if(req.body.recordarUsuario){
                res.cookie("userEmail",req.body.email, { maxAge: (1000 * 60) * 2})
            }

            return  res.redirect('/users/profile');
          }
          return res.render(path.join(__dirname, "../views/users/login"), {
            errors: {
                email: {
                    msg: "La contraseña es incorrecta"
                }
            }
        });
        }
         return res.render(path.join(__dirname, "../views/users/login"), {
            errors: {
                email: {
                    msg: "Este email no se encuentra registrado"
                }
            }
        });
    },

    profile: (req, res) => {
          console.log(req.cookies.userEmail)
          return res.render(path.join(__dirname, "../views/users/profile"), {
            user: req.session.userLogged
          }
          );
    },
    logout: (req,res) =>{
        req.session.destroy();
        return res.redirect("/muestras")
    }
}

module.exports = usersController;
