const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  updatePassword
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get user profile (protected)
router.get("/profile", authMiddleware, getProfile);

// Update password (frontend-only, no email/OTP)
router.put("/update-password", authMiddleware, updatePassword);

module.exports = router;
