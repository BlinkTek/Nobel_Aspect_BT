const express = require("express");
const {
  createCaseStudy,
  getAllCaseStudies,
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
} = require("../controllers/caseStudy.controller");

const router = express.Router();

router.post("/create", createCaseStudy);
router.get("/list", getAllCaseStudies);
router.get("/view/:id", getCaseStudyById);
router.put("/edit/:id", updateCaseStudy);
router.delete("/delete/:id", deleteCaseStudy);

module.exports = router;
