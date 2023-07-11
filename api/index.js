require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const api = require("./routes/api");
const app = express();
const port = process.env.PORT;
// Middleware para permitir solicitudes CORS
app.use((req, res, next) => {
  // Origen permitido (aquí puedes ajustarlo según tus necesidades)
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Métodos HTTP permitidos
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  // Encabezados permitidos
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Permitir que el navegador envíe cookies con la solicitud
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", api);

app.listen(port, () => {
  console.log("Listen in port: ", port);
});
