
module.exports.getReview = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await aiService(code);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};
