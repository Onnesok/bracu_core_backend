const express = require("express");
const { getAllConsultations } = require("../controllers/facultyconsultation_controller");
const router = express.Router();

// Route to fetch all faculty consultations
router.get("/consultations", getAllConsultations);

module.exports = router;