const express = require("express");
const { updateProfile, updatePassword, getProfile } = require("../controllers/userController"); // Import getProfile
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Get user profile
router.get("/profile", authMiddleware, getProfile);

// Update user profile
router.put("/update", authMiddleware, updateProfile);

// Update user password
router.put("/update_password", authMiddleware, updatePassword);

module.exports = router;