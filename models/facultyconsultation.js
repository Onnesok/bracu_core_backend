const mongoose = require("mongoose");

const facultyConsultationSchema = new mongoose.Schema({
  Course: { type: String, required: true },
  "Theory Initial": { type: String, required: true },
  "Theory Day": { type: String, required: true },
  "Theory Time\n(1hr 20min)": { type: String, required: true },
  "Theory Room": { type: String, required: true },
  "Lab Day": { type: String },
  "Lab Time (3hr)": { type: String },
  "Lab Room": { type: String },
},
{ collection: "facultyconsultation" }
);

module.exports = mongoose.model("facultyconsultation", facultyConsultationSchema);