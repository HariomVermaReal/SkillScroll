// Importing the Mongoose library
const mongoose = require("mongoose");

//Creating Rating and Reviews Schema using the Mongoose Schema constructor
const ratingAndReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    rating: {
        type: Number,
        required: true
    },
    review:{
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
        index: true
    }
});

// Exporting the Mongoose model for the ratingAndReviewSchema, using the name "RatingAndReview"
module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);