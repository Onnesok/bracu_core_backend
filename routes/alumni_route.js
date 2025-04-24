const express = require("express");
const {
  getAllAlumni,
  addAlumni,
  editAlumni,
} = require("../controllers/alumni_controller");
const router = express.Router();

// Route to fetch all alumni with optional filtering
router.get("/", getAllAlumni);

// Route to add a new alumni
router.post("/", addAlumni);

// Route to edit an existing alumni
router.put("/:id", editAlumni);

module.exports = router;