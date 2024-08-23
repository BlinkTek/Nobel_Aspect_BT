const express = require("express");
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} = require("../controllers/service.controller");

const router = express.Router();

router.post("/create", createService);
router.get("/list", getAllServices);
router.get("/view/:id", getServiceById);
router.put("/edit/:id", updateService);
router.delete("/delete/:id", deleteService);

module.exports = router;
