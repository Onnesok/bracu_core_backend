const SOS = require("../models/sos_model");

// Handle SOS creation
exports.createSOS = async (req, res) => {
  const { userId, location, message, timestamp, contacts } = req.body;

  // Validate the request body
  if (!userId || !location || !message || !timestamp || !contacts) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save the SOS data to the database
    const sos = new SOS({
      userId,
      location,
      message,
      timestamp,
      contacts,
    });

    await sos.save();

    res.status(201).json({ success: true, message: "SOS saved successfully", sos });
  } catch (error) {
    console.error("Error saving SOS:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};