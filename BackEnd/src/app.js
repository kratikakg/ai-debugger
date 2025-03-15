const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Enable CORS for your frontend domain
app.use(cors({
    origin: "https://aidebugger.vercel.app",  // Allow frontend domain
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}));

// ✅ Optional: Allow All Origins (For Debugging)
// app.use(cors());

app.use(express.json());

module.exports = app;
