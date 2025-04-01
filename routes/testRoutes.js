const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from BRACU Core Backend API!" });
});

module.exports = router;
