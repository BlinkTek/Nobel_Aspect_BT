const serviceDAO = require("../dao/service.dao");

const createService = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded." });
    }

    const serviceData = {
      image: req.file.path,
      serviceTitle: req.body.serviceTitle,
      information: req.body.information,
      features: req.body.features,
    };

    const service = await serviceDAO.createService(serviceData);
    res.status(201).json(service);
  } catch (err) {
    console.log('errrrrrrr',err);
    
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
    const serviceData = {
      image: req.body.image,
      serviceTitle: req.body.serviceTitle,
      information: req.body.information,
      features: req.body.features,
    };

    const service = await serviceDAO.updateService(req.params.id, serviceData);
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

const getServiceByTitle = async (req, res) => {
  try {
    const { serviceTitle } = req.body;
    const service = await serviceDAO.findServiceByTitle(serviceTitle);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
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
  getServiceByTitle,
};
