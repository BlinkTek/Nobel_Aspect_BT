const CaseStudy = require('../models/caseStudy.model');

const createCaseStudy = async (caseStudyData) => {
  const caseStudy = new CaseStudy(caseStudyData);
  return await caseStudy.save();
};

const getAllCaseStudies = async () => {
  return await CaseStudy.find();
};

const getCaseStudyById = async (id) => {
  return await CaseStudy.findById(id);
};

const updateCaseStudy = async (id, caseStudyData) => {
  return await CaseStudy.findByIdAndUpdate(id, caseStudyData, { new: true });
};

const deleteCaseStudy = async (id) => {
  return await CaseStudy.findByIdAndDelete(id);
};

const findCaseStudyByTitle = async (casestudyTitle) => {
  return await CaseStudy.findOne({ casestudyTitle });
};

module.exports = {
  createCaseStudy,
  getAllCaseStudies,
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
  findCaseStudyByTitle,
};
