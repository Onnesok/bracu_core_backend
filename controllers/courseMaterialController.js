const CourseMaterial = require("../models/CourseMaterial");

// Add course material (admin only)
exports.addCourseMaterial = async (req, res) => {
  try {
    const newMaterial = new CourseMaterial(req.body);
    await newMaterial.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all course materials
exports.getAllCourseMaterials = async (req, res) => {
  try {
    const data = await CourseMaterial.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update course material by ID (admin only)
exports.updateCourseMaterial = async (req, res) => {
  try {
    const updated = await CourseMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete course material by ID (admin only)
exports.deleteCourseMaterial = async (req, res) => {
  try {
    const deleted = await CourseMaterial.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.status(200).json({ message: "Course material deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
