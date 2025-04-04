const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gsuite: { type: String, required: true, unique: true, trim: true },
  phoneNumber: { type: String, required: true, unique: true },
  studentId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  admission_year: { type: String },
  profilePicture: { type: String },
  bio: { type: String },
  currentAddress: { type: String },
  permanentAddress: { type: String },
  bloodGroup: { type: String },
  emergencyContact: {
    name: { type: String },
    relation: { type: String },
    phoneNumber: { type: String },
  },
  cgpa: { type: Number },
  completedCredits: { type: Number },
  totalCredits: { type: Number },
  role: { type: String, default: "Student" },
  accountVerified: { type: Boolean, default: false },
  studentIdImages: {
    front: { type: String },
    back: { type: String },
  },
  clubMemberships: [{ type: String }],
  ongoingCourses: [
    {
      courseCode: { type: String },
      courseTitle: { type: String },
      time: { type: String },
      days: [{ type: String }],
      room: { type: String },
      section: { type: String },
      faculty: { type: String },
    },
  ],
  registeredDevices: [{ type: String }],
  lastLogin: { type: Date },
});

module.exports = mongoose.model("User", userSchema);