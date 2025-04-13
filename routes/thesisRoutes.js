const express = require("express");
const router = express.Router();
const thesisCtrl = require("../controllers/thesisController");

router.post("/", thesisCtrl.addThesisGroup);
router.get("/", thesisCtrl.getAllThesisGroups);
router.put("/:id", thesisCtrl.updateThesisGroup);
router.delete("/:id", thesisCtrl.deleteThesisGroup);
router.get("/search/domain", thesisCtrl.searchByDomain); // ?domain=AI

module.exports = router;
