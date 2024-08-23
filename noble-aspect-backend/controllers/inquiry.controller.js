const inquiryDAO = require("../dao/inquiry.dao");

const createInquiry = async (req, res) => {
  try {
    console.log(req.body);
    const inquiry = await inquiryDAO.createInquiry(req.body);
    res.status(201).json(inquiry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await inquiryDAO.getAllInquiries();
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getInquiryById = async (req, res) => {
  try {
    const inquiry = await inquiryDAO.getInquiryById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createInquiry,
  getAllInquiries,
  getInquiryById,
};
