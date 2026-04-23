const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir frontend (IMPORTANTE)
app.use(express.static("public"));

// Custom middleware
const logger = require("./middlewares/logger");
app.use(logger);

// Database (IMPORTANTE)
const createTable = require("../database/migrations");
const seedData = require("../database/seeds");

createTable();
seedData();

// Routes
const medicamentosRoutes = require("./routes/medicamentos.routes");
app.use("/api/medicamentos", medicamentosRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("MediPlus API is running 🚀");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
