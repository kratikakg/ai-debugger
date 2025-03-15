// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());

// app.use(cors());


// app.options("*", cors());

// // Routes
// const aiRoutes = require("./routes/ai.routes");
// app.use("/ai", aiRoutes);

// module.exports = app;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Register Routes
const aiRoutes = require("./routes/ai.routes");
app.use("/ai", aiRoutes); // ✅ Ensure this is correct

module.exports = app;
