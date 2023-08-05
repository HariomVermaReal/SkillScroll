//creating an instance of cloudinary
const cloudinary = require("cloudinary").v2;
//loading environment variables from .env file into the process.env object. 
require("dotenv").config();

//Function to Connect cloudinary to upload media   
exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
  } catch (error) {
    console.log(error);
  }
};
