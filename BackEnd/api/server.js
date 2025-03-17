const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://aidebugger.vercel.app/", // Allow frontend domain
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.options("*", cors()); // Allow preflight requests

const aiRoutes = require("./routes/ai.routes");
app.use("/ai", aiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
