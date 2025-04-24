const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    graduation_year: { type: Number, required: true },
    degree: { type: String, required: true },
    university: { type: String, required: true },
    current_address: { type: String },
    current_position: {
      title: { type: String },
      company: { type: String },
      location: { type: String },
    },
    linkedin: { type: String },
    achievements: [{ type: String }],
    approved: { type: Boolean, default: false },
    last_updated: { type: Date, default: Date.now },
  },
  { collection: "alumni" } 
);

module.exports = mongoose.model("Alumni", alumniSchema);