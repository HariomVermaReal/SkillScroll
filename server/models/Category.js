// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating Category Schema using the Mongoose Schema constructor
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

// Exporting the Mongoose model for the categorySchema, using the name "Category"
module.exports = mongoose.model("Category", categorySchema);
