const express = require("express");
const { createSOS } = require("../controllers/sos_controller");

const router = express.Router();

// POST /api/sos - Handle SOS data
router.post("/", createSOS);

module.exports = router;