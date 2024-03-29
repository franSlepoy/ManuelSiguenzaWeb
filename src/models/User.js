const fs = require('fs');
const path = require("path");
const fileName = path.join(__dirname, "../data/users.json");

const User = {
    getData: () => {
        return JSON.parse(fs.readFileSync(fileName, 'utf-8'));
    },
    generateId: ()=> {
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let lastUser = allUsers.pop();
        return lastUser.id + 1;
        if(lastUser){
            return lastUser.id +1;
        }
        return 1;
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
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(fileName, JSON.stringify(allUsers,null, " "));
        return true;
    },
    delete: () =>{
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let finalUsers = allUsers.filter(oneUser.id !== id);
        fs.writeFileSync(fileName, JSON.stringify(finalUsers,null, " "));
        return true;
    }
}
module.exports = User;

