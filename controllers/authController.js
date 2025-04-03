const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

// User Registration
exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      gsuite,
      phoneNumber,
      studentId,
      department,
      gender,
      password,
      admission_year,
      profilePicture,
      bio,
      currentAddress,
      permanentAddress,
      bloodGroup,
      emergencyContact,
      cgpa,
      completedCredits,
      totalCredits,
      role,
      accountVerified,
      studentIdImages,
      clubMemberships,
      ongoingCourses,
      registeredDevices,
      lastLogin,
    } = req.body;

    // Check if all required fields are provided
    if (!gsuite || !firstName || !lastName || !phoneNumber || !studentId || !department || !gender || !password) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Check for duplicate entries
    let existingUser = await User.findOne({ gsuite });
    if (existingUser) return res.status(400).json({ message: "GSuite already registered" });

    existingUser = await User.findOne({ phoneNumber });
    if (existingUser) return res.status(400).json({ message: "Phone number already registered" });

    existingUser = await User.findOne({ studentId });
    if (existingUser) return res.status(400).json({ message: "Student ID already registered" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      firstName,
      lastName,
      gsuite,
      phoneNumber,
      studentId,
      department,
      gender,
      password: hashedPassword,
      admission_year,
      profilePicture,
      bio,
      currentAddress,
      permanentAddress,
      bloodGroup,
      emergencyContact,
      cgpa,
      completedCredits,
      totalCredits,
      role,
      accountVerified,
      studentIdImages,
      clubMemberships,
      ongoingCourses,
      registeredDevices,
      lastLogin,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ message: `${field} already exists` });
    }
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// User Login
exports.login = async (req, res) => {
  try {
    const { gsuite, password } = req.body;

    // Find the user by GSuite email
    let user = await User.findOne({ gsuite });
    if (!user) return res.status(400).json({ message: "Invalid GSuite email" });

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Respond with the token and user details
    res.json({
      token,
      userId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      gsuite: user.gsuite,
      phoneNumber: user.phoneNumber,
      studentId: user.studentId,
      department: user.department,
      gender: user.gender,
      admission_year: user.admission_year,
      profilePicture: user.profilePicture,
      bio: user.bio,
      currentAddress: user.currentAddress,
      permanentAddress: user.permanentAddress,
      bloodGroup: user.bloodGroup,
      emergencyContact: user.emergencyContact,
      cgpa: user.cgpa,
      completedCredits: user.completedCredits,
      totalCredits: user.totalCredits,
      role: user.role,
      accountVerified: user.accountVerified,
      studentIdImages: user.studentIdImages,
      clubMemberships: user.clubMemberships,
      ongoingCourses: user.ongoingCourses,
      registeredDevices: user.registeredDevices,
      lastLogin: user.lastLogin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

