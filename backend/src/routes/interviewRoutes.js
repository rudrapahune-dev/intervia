const express = require("express");
const {
  createInterview,
  getUserInterviews,
} = require("../controllers/interviewController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateToken, createInterview);
router.get("/", authenticateToken, getUserInterviews);

module.exports = router;