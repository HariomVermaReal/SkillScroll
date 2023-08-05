// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating Course Progress Schema using the Mongoose Schema constructor
const courseProgressSchema = new mongoose.Schema({
    courseID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    completedVideos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubSection"
        }
    ]
})

//Exporting Schema with name -> CourseProgress
module.exports = mongoose.model("CourseProgress", courseProgressSchema);