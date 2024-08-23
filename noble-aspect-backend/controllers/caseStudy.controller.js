const caseStudyDAO = require("../dao/caseStudy.dao");

const createCaseStudy = async (req, res) => {
  try {
    const caseStudy = await caseStudyDAO.createCaseStudy(req.body);
    res.status(201).json(caseStudy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllCaseStudies = async (req, res) => {
  try {
    const caseStudies = await caseStudyDAO.getAllCaseStudies();
    res.json(caseStudies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCaseStudyById = async (req, res) => {
  try {
    const caseStudy = await caseStudyDAO.getCaseStudyById(req.params.id);
    if (!caseStudy) {
      return res.status(404).json({ message: "Case study not found" });
    }
    res.json(caseStudy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCaseStudy = async (req, res) => {
  try {
    const caseStudy = await caseStudyDAO.updateCaseStudy(req.params.id, req.body);
    if (!caseStudy) {
      return res.status(404).json({ message: "Case study not found" });
    }
    res.json(caseStudy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCaseStudy = async (req, res) => {
  try {
    const caseStudy = await caseStudyDAO.deleteCaseStudy(req.params.id);
    if (!caseStudy) {
      return res.status(404).json({ message: "Case study not found" });
    }
    res.json({ message: "Case study deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCaseStudy,
  getAllCaseStudies,
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
};
