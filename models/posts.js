const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    body:{
        required:true,
        type:String
    },
    author:{
        required:true,
        type:String
    },
    created:{
        type : String, 
        default: Date()
    },
    comments:{
        type: Number,
        default: 0
    },
    votes:{
        type: Number,
        default: 0
    },
    voters:{
        type:Array
    },
    categories:{
        type:Array
    },
    postimage:{
        type:String,
        default:"noimage"
    }
});
const Post = module.exports = mongoose.model("Post", PostSchema);