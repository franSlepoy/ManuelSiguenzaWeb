const express = require('express');
const path = require("path");
const app = express();
const methodOverride = require('method-override');
const session = require("express-session");
const PORT = process.env.PORT || 3000;
const obrasRoutes = require("./routes/obrasRoutes");
const muestrasRoutes = require("./routes/muestrasRoutes");
const usersRoutes = require("./routes/usersRoutes");
const userLoggedMiddlewere = require("./middlewares/userLoggedMiddleware");
const cookies = require("cookie-parser");

app.use(cookies());
app.use(userLoggedMiddlewere);
app.use(session({
    secret: "Super secreto",
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddlewere);
app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", obrasRoutes);
app.use("/muestras", muestrasRoutes);
app.use("/users", usersRoutes);


app.listen(PORT, ()=> console.log ("Servidor escuchando al puerto", PORT))