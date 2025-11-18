const express = require("express");
const router = express.Router();
const reagentesController = require("../controllers/reagentesController"); // importa a logica

// Rota para Listar todos os reagentes (GET)
// A URL completa será /api/reagentes
router.get("/", reagentesController.listarReagentes);

// Rota para Cadastrar um novo reagente (POST)
// A URL completa será /api/reagentes
router.post("/", reagentesController.cadastrarReagente);

module.exports = router;
