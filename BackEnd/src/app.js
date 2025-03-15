const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// ✅ Allow requests from your frontend
app.use(cors({
    origin: "https://aidebugger.vercel.app", // Your frontend URL
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true
}));

// ✅ Allow preflight requests
app.options("*", cors());

// Routes
const aiRoutes = require("./routes/ai.routes");
app.use("/ai", aiRoutes);

module.exports = app;
