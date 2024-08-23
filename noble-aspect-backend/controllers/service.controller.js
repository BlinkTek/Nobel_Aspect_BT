const serviceDAO = require("../dao/service.dao");

const createService = async (req, res) => {
  try {
    const service = await serviceDAO.createService(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await serviceDAO.getAllServices();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await serviceDAO.getServiceById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateService = async (req, res) => {
  try {
    const service = await serviceDAO.updateService(req.params.id, req.body);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await serviceDAO.deleteService(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
