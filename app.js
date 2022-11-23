const express = require("express");
const bp = require("body-parser");
const routers = require("./routers");
const Contenedor = require("./controllers/productsController");
const productos = new Contenedor("./controllers/productos.json");
const app = express();
const PORT = 8080;

/* middlewares incorporados */
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/api", routers);
app.use(express.static("public"));

app.get("/api", async (req, res) => {
    console.log(`get req recibida con exito`);
    res.status(200).send(
        `<h1>Bienvenido a mi primer entrega del proyecto de backend! 🚀💫💻</h1>`
    );
});

const server = app.listen(PORT, () => {
    console.log(
        `Servidor http escuchando en el puerto ${server.address().port}`
    );
    console.log(`http://localhost:${server.address().port}`);
});
server.on("error", error => console.log(`Error en servidor: ${error}`));
