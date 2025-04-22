// const FacultyConsultation = require("../models/facultyconsultation");

// // Fetch faculty consultations with optional filters
// exports.getAllConsultations = async (req, res) => {
//   try {
//     // Extract query parameters
//     const filters = {};
//     if (req.query.Course) filters.Course = req.query.Course;
//     if (req.query["Theory Initial"]) filters["Theory Initial"] = req.query["Theory Initial"];
//     if (req.query["Theory Day"]) filters["Theory Day"] = req.query["Theory Day"];
//     if (req.query["Theory Time"]) filters["Theory Time\n(1hr 20min)"] = req.query["Theory Time"];
//     if (req.query["Lab Day"]) filters["Lab Day"] = req.query["Lab Day"];

//     // Fetch consultations based on filters
//     const consultations = await FacultyConsultation.find(filters);

//     if (consultations.length === 0) {
//       return res.status(404).json({ message: "No consultations found" });
//     }

//     res.json({
//       message: "Consultations retrieved successfully",
//       consultations,
//     });
//   } catch (error) {
//     console.error("Error fetching consultations:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


const FacultyConsultation = require("../models/facultyconsultation");

// Fetch faculty consultations with optional filters
exports.getAllConsultations = async (req, res) => {
  try {
    // Extract query parameters
    const filters = {};

    // Handle Course filter (partial match, case-insensitive)
    if (req.query.Course) {
      filters.Course = { $regex: `^${req.query.Course}`, $options: "i" }; // Match Course starting with the input
    }

    // Handle Theory Initial filter (case-insensitive)
    if (req.query["Theory Initial"]) {
      filters["Theory Initial"] = { $regex: req.query["Theory Initial"], $options: "i" };
    }

    // Handle Theory Day filter (partial match, case-insensitive)
    if (req.query["Theory Day"]) {
      filters["Theory Day"] = { $regex: req.query["Theory Day"], $options: "i" }; // Match any part of the day
    }

    // Handle Theory Time filter (case-insensitive)
    if (req.query["Theory Time"]) {
      filters["Theory Time\n(1hr 20min)"] = { $regex: req.query["Theory Time"], $options: "i" };
    }

    // Handle Lab Day filter (partial match, case-insensitive)
    if (req.query["Lab Day"]) {
      filters["Lab Day"] = { $regex: req.query["Lab Day"], $options: "i" }; // Match any part of the lab day
    }

    // Fetch consultations based on filters
    const consultations = await FacultyConsultation.find(filters);

    if (consultations.length === 0) {
      return res.status(404).json({ message: "No consultations found" });
    }

    res.json({
      message: "Consultations retrieved successfully",
      consultations,
    });
  } catch (error) {
    console.error("Error fetching consultations:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};