const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    serviceTitle: {
      type: String,
      enum: ["Digital Marketing", "Designing", "Branding"],
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Service", serviceSchema);
