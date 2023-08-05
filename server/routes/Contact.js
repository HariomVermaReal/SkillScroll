// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers
const { contactUsController } = require("../controllers/ContactUs")

// contact route
router.post("/contact", contactUsController)

module.exports = router