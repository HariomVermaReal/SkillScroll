//creating an instance of razorpay
const Razorpay = require("razorpay");
//loading environment variables from .env file into the process.env object.
require("dotenv").config();

//Function to Connect razorpay for payment
exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});
