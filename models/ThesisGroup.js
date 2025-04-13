const mongoose = require("mongoose");

const thesisGroupSchema = new mongoose.Schema({
  email: { type: String, required: true },
  possibleDomains: [String],
  possibleTopics: [String],
  membersNeeded: { type: Number, required: true },
  currentMembers: { type: Number, required: true },
  supervisor: { type: String, default: "" },
  description: { type: String, default: "" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ThesisGroup", thesisGroupSchema);
