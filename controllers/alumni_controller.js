const Alumni = require("../models/alumni_model");

// Fetch all alumni with optional filtering
exports.getAllAlumni = async (req, res) => {
  try {
    const filters = {};
    if (req.query.approved) {
      filters.approved = req.query.approved === "true";
    }

    const alumni = await Alumni.find(filters);
    res.json({
      message: "Alumni data retrieved successfully",
      alumni,
    });
  } catch (error) {
    console.error("Error fetching alumni data:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Add a new alumni
exports.addAlumni = async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    const savedAlumni = await newAlumni.save();
    res.status(201).json({
      message: "Alumni added successfully",
      alumni: savedAlumni,
    });
  } catch (error) {
    console.error("Error adding alumni:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Edit an existing alumni
exports.editAlumni = async (req, res) => {
  try {
    const alumniId = req.params.id;
    const updatedAlumni = await Alumni.findByIdAndUpdate(
      alumniId,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedAlumni) {
      return res.status(404).json({ message: "Alumni not found" });
    }

    res.json({
      message: "Alumni updated successfully",
      alumni: updatedAlumni,
    });
  } catch (error) {
    console.error("Error updating alumni:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};