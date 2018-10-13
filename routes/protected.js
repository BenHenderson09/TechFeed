const express  = require('express');
const path     = require('path');
const mongoose = require('mongoose');
const multer   = require('multer');
const router   = express.Router();
const Post     = require('../models/posts.js');
const User     = require('../models/users.js');

router.get("/posts/add",(req,res)=>{
    if (req.user){
        res.sendFile("index.html", { root: path.join(__dirname, '../client/dist/browser') });
    }else{
        res.redirect('/auth/login'); 
    }
});

router.get("/posts/edit/:id", (req,res)=>{
    if (req.user){
        Post.findOne({_id:req.params.id}, (err,post)=>{
            if(err){ console.log(err); throw err; }
            if (post.author == req.user.username){
                res.sendFile("index.html", { root: path.join(__dirname, '../client/dist/browser') });
            }else{
                res.redirect('/auth/login'); 
            }
        });
    }else{
        res.redirect('/auth/login'); 
    }
});

router.get("/account", (req,res)=>{
    if (req.user){
        res.sendFile("index.html", { root: path.join(__dirname, '../client/dist/browser') });
    }else{
        res.redirect("/auth/login");
    }
});

router.get("/account/edit", (req,res)=>{
    if (req.user){
        res.sendFile("index.html", { root: path.join(__dirname, '../client/dist/browser') });
    }else{
        res.redirect("/auth/login");
    }
});

module.exports = router;