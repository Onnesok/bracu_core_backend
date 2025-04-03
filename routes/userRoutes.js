const express = require("express");
const { updateProfile, updatePassword } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Update user profile
router.put("/profile", authMiddleware, updateProfile);

// Update user password
router.put("/update_password", authMiddleware, updatePassword);

module.exports = router;
