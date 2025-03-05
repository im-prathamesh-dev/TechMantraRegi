import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import registerRoute from "./routes/registerRoute.js";
import cors from "cors";

// Configure env
dotenv.config();

// Database config
connectDB();

// Rest object
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Status Check Route ✅
app.get("/api/v1/status", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
  });
});

// Routes
app.use("/api/v1/register", registerRoute);

const PORT = process.env.PORT || 10000;

// Run Listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
