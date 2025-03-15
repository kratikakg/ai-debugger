const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://aidebugger.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}));

app.options("*", cors());

const aiRoutes = require("./routes/ai.routes");
app.use("/ai", aiRoutes);

module.exports = app;
