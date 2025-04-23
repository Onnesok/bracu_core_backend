const express = require("express");
const {
  getAllStConsultations,
  getStConsultationById,
} = require("../controllers/stconsultationcontroller");
const router = express.Router();

// Route to fetch all student consultations
router.get("/", getAllStConsultations);

// Route to fetch a specific student consultation by Student ID
router.get("/:id", getStConsultationById);

module.exports = router;