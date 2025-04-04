const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Update User Profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from authenticated token :)
    const updateData = { ...req.body }; // Clone the request body to avoid modifying it directly

    // Remove the password field if it exists in the update data
    if (updateData.password) {
      delete updateData.password;
    }

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData }, // Update only the provided fields
      { new: true, runValidators: true } // Return the updated document and validate the fields
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Profile updated successfully",
      user: updatedUser, // Return the entire updated user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update User Password
exports.updatePassword = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from authenticated token
    const { oldPassword, newPassword } = req.body; // Extract old and new passwords from request body

    // Validate input
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Both old and new passwords are required" });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the old password with the hashed password in the database
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};