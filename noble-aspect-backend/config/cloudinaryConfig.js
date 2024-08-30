// config/cloudinaryConfig.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'worktestcloud',
  api_key: process.env.CLOUDINARY_API_KEY || '923653437151994',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'MZ3scCSMT6klK9ZM_yG_9bCi4bo',
});

module.exports = cloudinary;
