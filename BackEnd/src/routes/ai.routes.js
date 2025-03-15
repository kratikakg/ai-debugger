const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();

app.options("*", cors()); 

router.post("/get-review", aiController.getReview)


module.exports = router;    