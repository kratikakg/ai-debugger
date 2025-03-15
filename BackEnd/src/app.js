const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));



app.use(express.json());

module.exports = app;
