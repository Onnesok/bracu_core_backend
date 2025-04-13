const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/courseMaterialController");

router.post("/", courseCtrl.addCourseMaterial);
router.get("/", courseCtrl.getAllCourseMaterials);
router.put("/:id", courseCtrl.updateCourseMaterial);
router.delete("/:id", courseCtrl.deleteCourseMaterial);

module.exports = router;
