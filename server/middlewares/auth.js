const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async (req, res, next) => {
  try {
    //extract token
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorisation").replace("Bearer ", "");

    //if token is missing then return responce
    if(!token){
        return res.status(401).json({
            success: false,
            message: "Token is missing"
        });
    }

    //verify the token
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);
        req.user = decode
    }
    catch(err){
        //verification Issue
        return res.status(401).json({
            success: false,
            messgage: "Token is invalid"
        });
    }
    next();
  } 
  catch (error) {
    return res.status(401).json({
        success: false,
        messgage: "something went wrong while validating token"
    });
  }
};

//isStudent
exports.isStudent = async (req, res, next) => {
    try{
        if(req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students only"
            })
        }
        next()
    }
    catch(error){
        return res.status(500).json({
            success: false,
            messgage: "User role cannot be verified, plz try again"
        });
    }
}

//isInstructor
exports.isInstructor = async (req, res, next) => {
    try{
        if(req.user.accountType !== "Instrctor") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Instrctors only"
            })
        }
        next()
    }
    catch(error){
        return res.status(500).json({
            success: false,
            messgage: "User role cannot be verified, plz try again"
        });
    }
}

//isAdmin
exports.isAdmin = async (req, res, next) => {
    try{
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admins only"
            })
        }
        next()
    }
    catch(error){
        return res.status(500).json({
            success: false,
            messgage: "User role cannot be verified, plz try again"
        });
    }
}