const mongoose = require("mongoose");

const courseMaterialSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  youtubePlaylists: [String],
  driveFolderLinks: [String],
});

module.exports = mongoose.model("CourseMaterial", courseMaterialSchema);
