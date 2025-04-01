const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gsuite: { type: String, required: true, unique: true, trim: true }, 
  phone: { type: String, required: true, unique: true },
  studentId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);