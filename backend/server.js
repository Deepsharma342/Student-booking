import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoDB.js";
import cors from "cors";
import appointmentRoutes from './routes/appointmentRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.use("/api/appointments", appointmentRoutes); // base path
app.get("/", (req, res) => res.send("API is running..."));

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
