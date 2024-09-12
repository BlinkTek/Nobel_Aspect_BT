const express = require("express");
const { createInquiry, getAllInquiries, getInquiryById, deleteInquiry } = require("../controllers/inquiry.controller");

const router = express.Router();

router.post("/inquiries", createInquiry);
router.get("/inquiries", getAllInquiries);
router.get("/inquiries/:id", getInquiryById);
router.get("/delete", deleteInquiry);

module.exports = router;
