const express = require("express");
const { createInterview } = require("../controllers/interviewController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateToken, createInterview);

module.exports = router;