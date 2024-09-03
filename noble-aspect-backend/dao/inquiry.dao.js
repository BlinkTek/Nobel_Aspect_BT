const Inquiry = require('../models/inquiry.model');

const createInquiry = async (inquiryData) => {
  const inquiry = new Inquiry(inquiryData);
  return await inquiry.save();
};

const getAllInquiries = async () => {
  return await Inquiry.find().sort({ createdAt: -1 });
};

const getInquiryById = async (id) => {
  return await Inquiry.findById(id);
};

module.exports = {
  createInquiry,
  getAllInquiries,
  getInquiryById,
};
