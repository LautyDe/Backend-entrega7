const { Router } = require("express");
const router = Router();
const Contenedor = require("../controllers/productsController.js");
const carrito = new Contenedor("./controllers/carritos.json");
const notFound = { error: "Producto no encontrado" };

router.post("/", async (req, res) => {
    console.log(`post req recibida con exito`);
    const data = [];
    const nuevoCarrito = await carrito.save(data);
    !data && res.status(204).json(notFound);
    res.status(201).json(data);
});

router.get("/:id", async (req, res) => {
    console.log(`getById req recibida con exito`);
    const id = parseInt(req.params.id);
    const producto = await productos.getById(id);
    !producto && res.status(404).json(notFound);
    res.status(200).json(producto);
});

router.put("/:id", async (req, res) => {
    console.log(`put req recibida con exito`);
    const id = parseInt(req.params.id);
    const data = req.body;
    const productoEditado = await productos.modify(id, data);
    !productoEditado && res.status(404).json(notFound);
    res.status(200).json(productoEditado);
});

router.delete("/:id", async (req, res) => {
    console.log(`delete req recibida con exito`);
    const id = parseInt(req.params.id);
    const producto = await productos.getById(id);
    const eliminarProducto = await productos.deleteById(id);
    !producto && res.status(404).json(notFound);
    res.status(200).json(producto);
});

module.exports = router;
