const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

// Proxy requests to microservices
app.use("/users", proxy("http://localhost:6001"));
app.use("/products", proxy("http://localhost:6002"));

const PORT = 6600;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
