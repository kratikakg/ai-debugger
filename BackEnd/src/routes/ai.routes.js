const express = require("express");
const aiController = require("../controllers/ai.controller");

const router = express.Router();

// Apply CORS headers middleware
router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

router.post("/get-review", aiController.getReview);

module.exports = router;
