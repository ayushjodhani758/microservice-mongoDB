require("./config/dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productRoutes);

module.exports = app;
