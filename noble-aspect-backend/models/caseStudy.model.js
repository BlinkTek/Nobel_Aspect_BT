const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    casestudyTitle: {
      type: String,
      required: true,
    },
    information: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("CaseStudy", caseStudySchema);
