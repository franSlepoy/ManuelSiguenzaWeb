const fs = require("fs");
const path = require("path")

const fileName = path.join(__dirname, "../data/users.json");

const User = {
    getData: () => {
        return JSON.parse(fs.readFileSync(fileName, "utf-8"));
    },

    findAll: () => {
        return JSON.parse(fs.readFileSync(fileName, "utf-8"));
    },

    findByPk: (id) =>{
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findByField: (field, text) =>{
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {

    }
}
console.log(User.findByField("email","lito@hola.com"))
