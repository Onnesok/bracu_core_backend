const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User Registration
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, gsuite, phone, studentId, department, gender, password } = req.body;

    // Check if all required fields are provided
    if (!gsuite || !firstName || !lastName || !phone || !studentId || !department || !gender || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the email (gsuite) already exists
    let existingUser = await User.findOne({ gsuite });
    if (existingUser) return res.status(400).json({ message: "GSuite already registered" });

    // Check if the phone number already exists
    existingUser = await User.findOne({ phone });
    if (existingUser) return res.status(400).json({ message: "Phone number already registered" });

    // Check if the student ID already exists
    existingUser = await User.findOne({ studentId });
    if (existingUser) return res.status(400).json({ message: "Student ID already registered" });

    // Hash
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      firstName,
      lastName,
      gsuite,
      phone,
      studentId,
      department,
      gender,
      password: hashedPassword
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// User Login
exports.login = async (req, res) => {
  try {
    const { gsuite, password } = req.body;

    let user = await User.findOne({ gsuite });
    if (!user) return res.status(400).json({ message: "Invalid Gsuite" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, userId: user._id, firstName: user.firstName, lastName: user.lastName, gsuite: user.gsuite, phone: user.phone, studentId: user.studentId, department: user.department, gender: user.gender });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

