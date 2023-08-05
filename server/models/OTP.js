// Importing the Mongoose library
const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

//Creating OTP Schema using the Mongoose Schema constructor
const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

// a function -> to send emails
async function sendVerificationEmail(email, otp) {
  //sending the email
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      emailTemplate(otp)
    );
    console.log("Email sent Successfully: ", mailResponse.response);
  } catch (error) {
    console.log("Error occurd while sending email: ", error);
    throw error;
  }
}

// Defining a post-save hook to send email after the document has been saved
otpSchema.pre("save", async function (next) {
  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

// Exporting the Mongoose model for the otpSchema, using the name "OTP"
module.exports = mongoose.model("OTP", otpSchema);
