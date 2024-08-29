const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    serviceTitle: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    features: {
      type: [String], // Array of strings for features
      default: [],    // Set default value to an empty array
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Service", serviceSchema);
