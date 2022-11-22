const { Router } = require("express");
const productos = require("./productos");
const carritos = require("./carritos");

const router = Router();

router.use("/productos", productos);
router.use("/carritos", carritos);

module.exports = router;
