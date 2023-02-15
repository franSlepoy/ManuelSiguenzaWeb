const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const obrasRoutes = require("./routes/obrasRoutes")


app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", obrasRoutes);


app.listen(PORT, ()=> console.log ("Servidor escuchando al puerto", PORT))