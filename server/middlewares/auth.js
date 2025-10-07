const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/User");

//auth
exports.auth = async (req,res,next) =>{
    try{
        // extract token
        console.log("Cookies:", req.cookies);
        console.log("Authorization header:", req.header("Authorization"));
        console.log("Body token:", req.body.token);
        
        const token = req.cookies.token
                     || req.body.token
                     || (req.header("Authorization") && req.header("Authorization").replace("Bearer ", ""));

        console.log("Extracted token:", token ? token.substring(0, 20) + "..." : "No token found");

        //if Token is not present
        if(!token){
            console.log("No token found in request");
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        //verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decode Part is:",decode);
            req.user = decode;
        } catch (error) {
            //verification - invalid
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    }
    catch(error){
         return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
         });
    }
}

 
//isSudent
exports.isStudent = (req,res,next) =>{
    try {
       if(req.user.accountType !== "Student"){
        return res.status(401).json({
            success:false,
            message: 'This is a protected route for Student only',
        });
       }  
       next();
    } catch (error) {
        return res.status(500).json({
          success:false,
          message: 'User role cannot be verified, please try again'
        })
    }
}


// isInstructor
exports.isInstructor = (req,res,next) =>{
    try {
       if(req.user.accountType !== "Instructor"){
        return res.status(401).json({
            success:false,
            message: 'This is a protected route for Instructor only',
        });
       }  
       next();
    } catch (error) {
        return res.status(500).json({
          success:false,
          message: 'User role cannot be verified, please try again'
        })
    }
}


//isAdmin
exports.isAdmin = (req,res,next) =>{
    try {
       if(req.user.accountType !== "Admin"){
        return res.status(401).json({
            success:false,
            message: 'This is a protected route for Admin only',
        });
       }  
       next();
    } catch (error) {
        return res.status(500).json({
          success:false,
          message: 'User role cannot be verified, please try again'
        })
    }
}