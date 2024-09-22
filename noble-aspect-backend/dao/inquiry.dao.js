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

const deleteInquiry = async (id) => {
  return await Inquiry.findByIdAndDelete(id);
};

module.exports = {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  deleteInquiry,
};
