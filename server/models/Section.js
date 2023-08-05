// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating Section Schema using the Mongoose Schema constructor
const sectionSchema = new mongoose.Schema({
    sectionName:{
        type: String
    },
    subSection:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "SubSection"
        }
    ]
});

// Exporting the Mongoose model for the sectionSchema, using the name "Section"
module.exports = mongoose.model("Section", sectionSchema);
