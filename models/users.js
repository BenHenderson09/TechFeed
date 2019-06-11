const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    fullname:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    votes:{
        type: Number,
        default: 0
    },
    posts:{
        type: Number,
        default: 0
    },
    created:{
    type : String, 
    default: Date()
    }
});

const User = module.exports = mongoose.model("User", UserSchema);