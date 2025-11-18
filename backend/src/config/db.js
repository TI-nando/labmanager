const mysql = require("mysql2");
const dotenv = require("dotenv");

// vai carregar as variaveis do .env
dotenv.config();

// --- INÍCIO DO DEBUG ---
console.log("--- INÍCIO DO DEBUG ---");
console.log('Valor lido para DB_USER (Deve ser "root"):', process.env.DB_USER);
console.log(
  "Valor lido para DB_PASS (Deve ser vazio ou undefined):",
  process.env.DB_PASS
);
console.log("--- FIM DO DEBUG ---");
// --- FIM DO DEBUG ---

//Cria o pool de conexões
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Numero maximo de coneções simultaneas
  queueLimit: 0,
});

//Exporta com suporte a promises (async/await)
//Isso vai permitir usarmos 'await db.execute()' em vez de callbacks confusos
module.exports = pool.promise();
