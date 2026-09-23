const prisma = require("../lib/prisma");

async function createInterview(req, res) {
  try {
  const {
  role,
  difficulty,
  focusAreas,
  type = "Technical Interview",
} = req.body;


const userId = req.user.userId;

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
async function getUserInterviews(req, res) {
  try {
    const userId = req.user.userId;

    const interviews = await prisma.interview.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      interviews,
    });
  } catch (error) {
    console.error("Get interviews failed:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch interviews",
    });
  }
}
module.exports = {
  createInterview,
  getUserInterviews,
};