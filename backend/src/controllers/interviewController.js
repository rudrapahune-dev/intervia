const prisma = require("../lib/prisma");

async function createInterview(req, res) {
  try {
    const {
      userId,
      role,
      difficulty,
      focusAreas,
      type = "Technical Interview",
    } = req.body;

    if (!userId || !role || !difficulty || !focusAreas) {
      return res.status(400).json({
        success: false,
        message: "userId, role, difficulty and focusAreas are required",
      });
    }

    if (!Array.isArray(focusAreas) || focusAreas.length === 0) {
      return res.status(400).json({
        success: false,
        message: "focusAreas must be a non-empty array",
      });
    }

    const interview = await prisma.interview.create({
      data: {
        userId,
        role,
        difficulty,
        focusAreas,
        type,
      },
    });

    res.status(201).json({
      success: true,
      message: "Interview created successfully",
      interview,
    });
  } catch (error) {
    console.error("Create interview failed:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create interview",
    });
  }
}

module.exports = {
  createInterview,
};