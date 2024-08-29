// services/cloudinaryUploader.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "noble", // Folder in Cloudinary where images will be stored
    allowed_formats: ["jpeg", "jpg", "png", "gif"],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
