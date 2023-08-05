// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating User Schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    // Defining the fristName field with type String, required, and trimmed
    fristName: {
      type: String,
      required: true,
      trim: true,
    },
    // Defining the lastName field with type String, required, and trimmed
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    // Defining the email field with type String, required, and trimmed
    email: {
      type: String,
      required: true,
      trim: true,
    },
    // Defining the password field with type String and required
    password: {
      type: String,
      required: true,
      trim: true,
    },
    // Defining the role field with type String and enum values of "Admin", "Student", or "Instrctor"
    accountType: {
      type: String,
      required: true,
      enum: ["Admin", "Student", "Instrctor"],
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    courseProgress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseProgress",
      },
    ],
    image: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    active: {
      type: Boolean,
      default: true,
    },
    approved: {
      type: Boolean,
      default: true,
    },
  },
  // Adding timestamps for when the document is created and last modified
  // createdAt when the document is first inserted, and updatedAt whenever you update
  { timestamps: true }
);

// Exporting the Mongoose model for the userSchema, using the name "User"
module.exports = mongoose.model("User", userSchema);
