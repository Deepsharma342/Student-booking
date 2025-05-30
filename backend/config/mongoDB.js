import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Could not connect to database", error);
    process.exit(1); // optional: to crash server if DB fails
  }
};

export default connectDB;
