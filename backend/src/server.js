const express = require("express");
const cors = require("cors");
require("dotenv").config();

const prisma = require("./lib/prisma");
const healthRoutes = require("./routes/healthRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const interviewRoutes = require("./routes/interviewRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/interviews", interviewRoutes);
app.get("/api/health/db", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      success: true,
      message: "Database connection is working",
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Intervia backend running on http://172.31.28.11:${PORT}`);
});