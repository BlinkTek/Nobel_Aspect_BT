const express = require("express");
const {
  createCaseStudy,
  getAllCaseStudies,
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
  getCaseStudyByTitle,
} = require("../controllers/caseStudy.controller");
const upload = require("../utils/cloudinaryUploader");

const router = express.Router();

router.post("/create", upload.single("image"), createCaseStudy);
router.get("/list", getAllCaseStudies);
router.get("/view/:id", getCaseStudyById);
router.put("/edit/:id", updateCaseStudy);
router.delete("/delete/:id", deleteCaseStudy);
router.post("/case-study", getCaseStudyByTitle);

module.exports = router;
