const db = require("../config/db"); // Importa o pool de conexões (db.js)

// Função 1: Listar todos os reagentes (GET)
exports.listarReagentes = async (req, res) => {
  try {
    // [rows] pegar o array de resultados, ignorando metadados
    const [rows] = await db.execute("SELECT * FROM reagentes");

    // Retorna o resultado com Status 200 (SUCESSO)
    res.status(200).json(rows);
  } catch (error) {
    // Em caso de erro, loga no console e retorna status 500 (ERRO INTERNO)
    console.error("Erro ao listar reagentes:", error);
    res.status(500).json({
      message: "Erro interno do servidor",
      details: error.message,
    });
  }
};

// Função 2: CADASTRAR NOVO REAGENTE (POST)
exports.cadastrarReagente = (req, res) => {
  res.status(201).json({
    message:
      "Rota de cadastro funcionando! (Lógica do banco será adicionado futuramente)",
  });
};
