const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/User");

//auth
exports.auth = async (req,res,next) =>{
    try{
        // extract token from cookie, body or Authorization header (case-insensitive)
        let token = req.cookies?.token || req.body?.token || req.get('Authorization') || req.get('authorization');

        // Normalize Bearer token format and strip quotes/whitespace
        if (token) {
            token = token.replace(/^Bearer\s+/i, '').trim();
            token = token.replace(/^"+|"+$/g, '');
        }

        //if Token is not present
        if(!token){
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        //verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
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