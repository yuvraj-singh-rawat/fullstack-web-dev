import express from "express"
import connectDB from "./src/config/db"
import dotenv from "dotenv"
import authRoutes from "./src/routes/authRoutes"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json())
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})