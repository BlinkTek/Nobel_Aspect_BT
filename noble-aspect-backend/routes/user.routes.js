const express = require("express");
const {
  getUsers,
  createUser,
  loginUser,
  updateUserProfile,
  viewUserProfile,
  changePassword,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/list", getUsers);
router.post("/create", createUser);
router.post("/login", loginUser);
router.put("/edit", authMiddleware, updateUserProfile);
router.get("/profile", authMiddleware, viewUserProfile);
router.put("/change-password", authMiddleware, changePassword);

module.exports = router;
