// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating Course Schema using the Mongoose Schema constructor
const courseSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    courseDescription: {
        type: String
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    whatYouWillLearn: {
        type: String
    },
    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section"
        }
    ],
    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReview"
        }
    ],
    price: {
        type: Number
    },
    thumbnail: {
        type: String
    },
    tag: {
        type: [String],
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required : true,
            ref: "User"
        }
    ],
    instructions: {
		type: [String],
	},
    status: {
        type: String,
        enum: ["Draft", "Published"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// Exporting the Mongoose model for the courseSchema, using the name "Course"
module.exports = mongoose.model("Course", courseSchema);





