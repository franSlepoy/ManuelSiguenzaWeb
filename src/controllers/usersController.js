const usersController = {
        
        registro: (req, res) => {
            res.render(path.join(__dirname, "../views/users/registro"));
        },
        login:  (req, res) => {
            res.render(path.join(__dirname, "../views/users/login"));
        },
        profile: (req, res) => {
            res.render("profile");
        },
}

module.exports = usersController;
