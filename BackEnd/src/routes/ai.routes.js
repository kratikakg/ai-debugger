
const express = require("express");
const router = express.Router();

router.post("/get-review", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    try {
        const { code } = req.body;
        if (!code) return res.status(400).json({ error: "Code is required" });

        return res.json({ review: "Your AI code review goes here." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
