const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware personalizado
const logger = require("./middlewares/logger");
app.use(logger);

// Rutas
const medicamentosRoutes = require("./routes/medicamentos.routes");
app.use("/api/medicamentos", medicamentosRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("API MediPlus funcionando 🚀");
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
