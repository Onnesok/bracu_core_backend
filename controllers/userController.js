const User = require("../models/User");

// Update User Profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from authenticated token :)
    const { firstName, lastName, phone, department, gender } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, phone, department, gender },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Profile updated successfully",
      user: {
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        gsuite: updatedUser.gsuite,
        phone: updatedUser.phone,
        studentId: updatedUser.studentId,
        department: updatedUser.department,
        gender: updatedUser.gender,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
