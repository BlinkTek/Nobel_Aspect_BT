const express = require("express");
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  getServiceByTitle,
} = require("../controllers/service.controller");
const upload = require("../utils/cloudinaryUploader");

const router = express.Router();

router.post("/create", upload.single("image"), createService);
router.get("/list", getAllServices);
router.get("/view/:id", getServiceById);
router.put("/edit/:id", updateService);
router.delete("/delete/:id", deleteService);
router.post("/getServiceByTitle", getServiceByTitle);

module.exports = router;
