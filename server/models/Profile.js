// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating Profile Schema using the Mongoose Schema constructor
const profileSchema = new mongoose.Schema({
    gender:{
        type:String
    },
    dateOfBirth:{
        type : String
    },
    about:{
        type: String,
        trim: true
    },
    contactNumber:{
        type: Number,
        trim: true
    }
});

// Exporting the Mongoose model for the profileSchema, using the name "Profile"
module.exports = mongoose.model("Profile", profileSchema);