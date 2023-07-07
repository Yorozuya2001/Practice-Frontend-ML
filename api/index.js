require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const api = require("./routes/api");
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", api);

app.listen(port, () => {
  console.log("Listen in port: ", port);
});
