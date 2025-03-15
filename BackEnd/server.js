require('dotenv').config();
const app = require('./src/app');
const cors=require('cors');
const PORT = process.env.PORT || 3000;  
app.use(cors({
    origin: "https://aidebugger.vercel.app",
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
