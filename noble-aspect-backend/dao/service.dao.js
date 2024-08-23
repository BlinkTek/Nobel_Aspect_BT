const Service = require('../models/service.model');

const createService = async (serviceData) => {
  const service = new Service(serviceData);
  return await service.save();
};

const getAllServices = async () => {
  return await Service.find();
};

const getServiceById = async (id) => {
  return await Service.findById(id);
};

const updateService = async (id, serviceData) => {
  return await Service.findByIdAndUpdate(id, serviceData, { new: true });
};

const deleteService = async (id) => {
  return await Service.findByIdAndDelete(id);
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
