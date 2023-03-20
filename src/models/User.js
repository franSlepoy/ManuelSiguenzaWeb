const fs = require("fs");
const path = require("path")

const fileName = path.join(__dirname, "../data/users.json");

const User = {
    getData: () => {
        return JSON.parse(fs.readFileSync(fileName, "utf-8"));
    },
    create: function (userData) {

    }
}
