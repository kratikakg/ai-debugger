// const express = require('express');
// const aiController = require("../controllers/ai.controller")

// const router = express.Router();


// router.post("/get-review", aiController.getReview)


// module.exports = router;    
const express = require("express");
const router = express.Router();

// Ensure CORS is handled (already in app.js)
router.post("/get-review", async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) return res.status(400).json({ error: "Code is required" });

        // Placeholder response
        return res.json({ review: "Your AI code review goes here." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
