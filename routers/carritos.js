const { Router } = require("express");
const router = Router();
const Contenedor = require("../controllers/productsController.js");
const carritos = new Contenedor("./controllers/carritos.json");
const notFound = { error: "Producto no encontrado" };
