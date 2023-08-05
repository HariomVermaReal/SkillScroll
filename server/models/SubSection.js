// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating Sub Section Schema using the Mongoose Schema constructor
const subSectionSchema = new mongoose.Schema({
    title:{
        type: String
    },
    timeDuration:{
        type: String
    },
    descripption:{
        type: String
    },
    videoUrl: {
        type: String
    }

})

// Exporting the Mongoose model for the subSectionSchema, using the name "SubSection"
module.exports = mongoose.model("SubSection", subSectionSchema)