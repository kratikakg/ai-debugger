
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const aiRoutes = require("./routes/ai.routes"); 
app.use("/ai", aiRoutes);

module.exports = app;
