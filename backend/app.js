const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookie = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookie());
//Route Imports

const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Middleware for error
app.use(errorMiddleware);
module.exports = app;
