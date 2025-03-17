const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Code is required" });
    }

    try {
        const review = await aiService(code);
        res.json({ review });
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
