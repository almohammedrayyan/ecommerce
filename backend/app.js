const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();
app.use(express.json());

//Route Imports

const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
app.use("/api/v1", product);
app.use("/api/v1", user);
//Middleware for error
app.use(errorMiddleware);
module.exports = app;
