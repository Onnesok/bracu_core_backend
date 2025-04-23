const StConsultation = require("../models/stconsultation");

// Fetch all student consultations
exports.getAllStConsultations = async (req, res) => {
  try {
    const consultations = await StConsultation.find(); // Fetch all documents
    res.json({
      message: "Student consultations retrieved successfully",
      consultations,
    });
  } catch (error) {
    console.error("Error fetching student consultations:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch student consultation by Student ID
exports.getStConsultationById = async (req, res) => {
  try {
    const studentId = req.params.id; // Extract Student ID from the request params
    const consultation = await StConsultation.findOne({ "Student ID": studentId });

    if (!consultation) {
      return res.status(404).json({ message: "Student consultation not found" });
    }

    res.json({
      message: "Student consultation retrieved successfully",
      consultation,
    });
  } catch (error) {
    console.error("Error fetching student consultation:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};