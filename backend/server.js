const express = require("express");
const cors = require("cors");
const db = require("./src/config/db"); //Importa a conexão
const reagentesRoutes = require("./src/routes/reagentes"); // Importa as rotas de reagentes
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Para o Node entender o JSON

// Rota de teste simples (ping)
app.get("/", (req, res) => {
  res.json({ message: "API LabManager Online" });
});

// Uso das rotas de reagentes
app.use("/api/reagentes", reagentesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
