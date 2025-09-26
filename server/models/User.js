const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
        require:true 
    },
    active: {
			type: Boolean,
			default: true,
		},
	approved: {
			type: Boolean,
			default: true,
		},
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref:"Profile",
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    image:{
        type:String,
        required: true,
    },

    // Backend generates a reset token and stores in it.
    token:{
        type:String,
    },
    // Backend also sets an expiry time(e.g., 15 minutes from now). That’s stored in resetPasswordExpires.
    resetPasswordExpires:{
        type:Date,
    },
    courseProgress:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "CourseProgress",
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);