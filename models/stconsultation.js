const mongoose = require("mongoose");

const stConsultationSchema = new mongoose.Schema(
  {
    Course: { type: String, required: true },
    Section: { type: String, required: true },
    Initial: { type: String, required: true },
    "Student ID": { type: Number, required: true },
    Name: { type: String, required: true },
    GSuite: { type: String, required: true },
    Room: { type: String, required: true },
    Lab: { type: String, required: true },
  },
  { collection: "stconsultation" }
);

module.exports = mongoose.model("StConsultation", stConsultationSchema);