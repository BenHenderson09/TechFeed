const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const cloudinary = require("cloudinary");
const router = express.Router();
const Post = require('../models/posts.js');
const User = require('../models/users.js');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const filter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 6 // 6 mb
    },
    fileFilter: filter
});

router.get("/all", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) { console.log(err); throw err }
        res.json(posts.reverse());
    });
});

router.post("/id", (req, res) => {
    Post.findOne({ _id: req.body.id }, (err, user) => {
        if (err) { console.log(err); throw err; }
        res.json(user);
    });
});

router.post("/username", (req, res) => {
    Post.find({ author: req.body.username }, (err, posts) => {
        if (err) { console.log(err); throw err; }
        res.json(posts.reverse());
    });
});

router.post("/add", upload.single("postimage"), (req, res) => {

    let postimage;
    let postimage_id;

    if (req.file) {
        // Upload image to static file db
        cloudinary.v2.uploader.upload(req.file.path, {
            quality: "auto",
            width: 800,
            height: 300,
            crop: "fit"
         },
            (err, result) => {
            if (err) { console.log(err); throw err; }

            postimage = result.secure_url;
            postimage_id = result.public_id;

            // Delete it from disk storage
            fs.unlink(req.file.path, (err) => {
                if (err) throw err;
            });

            addPost();
        });
    } else {
        postimage = "noimage";
        postimage_id = "";
        addPost();
    }

    function addPost() {
        const newPost = new Post({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author,
            postimage: postimage,
            postimage_id: postimage_id,
            upvotes: 0,
            votes: 0
        });

        for (let key in req.body) {
            if (key.includes('cb_')) {
                if (req.body[key] == 'true') {
                    newPost.categories.push(key);
                }
            }
        }

        // Convert time to dd-mm-yy
        date = new Date(newPost.created);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if (day < 10) { day = "0" + day; }
        if (month < 10) { month = "0" + month; }
        newPost.created = day + "-" + month + "-" + year;

        if (validate(newPost)) {
            newPost.save((err, user) => {
                if (err) { console.log(err); throw err; }

                User.findOne({ _id: req.user._id }, (err, user) => {
                    if (err) { console.log(err); }
                    user.posts++;

                    user.save((err, user) => {
                        if (err) { console.log(err); throw err; }
                        res.json({ message: "Post added successfully", success: true });
                    });
                });
            });
        } else {
            res.sendStatus(403);
        }
    }

    function validate(newPost) {
        if (!req.user) {
            return false;
        }
        if (newPost.title == undefined || newPost.title.length <= 5 || newPost.title.length > 100) {
            return false;
        }
        if (newPost.body == undefined || newPost.body.length <= 0 || newPost.body.length > 900000) {
            return false;
        }
        return true;
    }
});

router.post("/update", (req, res) => {
    const id = req.body.id;
    let categories = [];

    for (let key in req.body) {
        if (key.includes('cb_')) {
            if (req.body[key] == 'true') {
                categories.push(key);
            }
        }
    }

    Post.findOne({ _id: id }, (err, post) => {
        if (err) { console.log(err); throw err }

        if (validate(req.body, post)) {
            // Update post content
            post.title = req.body.title;
            post.body = req.body.body;
            post.categories = categories;

            post.save((err, post) => {
                if (err) { console.log(err); throw err; }
                res.json({ message: "Post updated successfully.", success: true });
            });
        } else {
            res.sendStatus(403);
        }
    });

    function validate(data, post) {
        if (!req.user || req.user.username != post.author) {
            return false;
        }
        if (data.title == undefined || data.title.length <= 5 || data.title.length > 100) {
            return false;
        }
        if (data.body == undefined || data.body.length <= 0 || data.body.length > 90000) {
            return false;
        }
        return true;
    }
});

router.delete("/delete", (req, res) => {
    const id = req.body.id;

    Post.findOne({ _id: id }, (err, post) => {
        if (err) { console.log(err); throw err; }

        if (req.user.username == post.author) {
            if (post.postimage != null && post.postimage != "noimage") {

                // Delete image
                cloudinary.v2.uploader.destroy(post.postimage_id, (err, result) => {
                    if (err) { console.log(err); throw err; }
                });
            }
                // Delete post
                Post.deleteOne({ _id: id }, (err) => {
                    if (err) { console.log(err); throw err; }

                    User.findOne({ _id: req.user._id }, (err, user) => {
                        if (err) { console.log(err); }
                        user.posts--;

                        user.save((err, user) => {
                            if (err) { console.log(err); throw err; }
                            res.json({ message: "Post deleted successfully.", success: true });
                        });
                    });
                });
            
        } else {
            res.sendStatus(403);
        }
    });
});

router.post("/upvote", (req, res) => {
    if (validate(req.body)) {
        Post.findOne({ _id: req.body.id }, (err, post) => {
            if (err) { console.log(err); throw err; }

            if (post.author == req.user.username) {
                res.sendStatus(403);
                return;
            }

            post.votes += req.body.num;

            if (voted(post.voters)) {
                for (let i = 0; i < post.voters.length; i++) {
                    if (post.voters[i].user == req.user.username) {
                        if (post.voters[i].vote == "up") {
                            post.voters[i].vote = "";
                        } else if (post.voters[i].vote == "down" && req.body.num == 1) {
                            post.voters[i].vote = "";
                        }
                        else {
                            post.voters[i].vote = "up";
                        }
                    }
                }
            } else {
                post.voters.push({ user: req.user.username, vote: "up" });
            }

            post.markModified('voters');
            post.save((err, post) => {
                if (err) { console.log(err); throw err; }
            });
        });
    } else {
        res.sendStatus(403);
    }

    function voted(voters) {
        for (var i = 0; i < voters.length; i++) {
            if (voters[i].user == req.user.username) {
                return true;
            }
        }
        return false;
    }

    function validate(data) {
        if (!req.user) {
            return false;
        }
        if (req.user.username != data.voter) {
            return false;
        }
        if (data.num > 2 || data.num < 1) {
            return false;
        }
        return true;
    }
});

router.post("/downvote", (req, res) => {
    if (validate(req.body)) {
        Post.findOne({ _id: req.body.id }, (err, post) => {
            if (err) { console.log(err); throw err; }

            if (post.author == req.user.username) {
                res.sendStatus(403);
                return;
            }

            post.votes -= req.body.num;

            if (voted(post.voters)) {
                for (let i = 0; i < post.voters.length; i++) {
                    if (post.voters[i].user == req.user.username) {
                        if (post.voters[i].vote == "down") {
                            post.voters[i].vote = "";
                        } else if (post.voters[i].vote == "up" && req.body.num == 1) {
                            post.voters[i].vote = "";
                        } else {
                            post.voters[i].vote = "down";
                        }
                    }
                }
            } else {
                post.voters.push({ user: req.user.username, vote: "down" });
            }

            post.markModified('voters');
            post.save((err, post) => {
                if (err) { console.log(err); throw err; }
            });
        });
    } else {
        res.sendStatus(403);
    }

    function voted(voters) {
        for (var i = 0; i < voters.length; i++) {
            if (voters[i].user == req.user.username) {
                return true;
            }
        }
        return false;
    }

    function validate(data) {
        if (!req.user) {
            return false;
        }
        if (req.user.username != data.voter) {
            return false;
        }
        if (data.num > 2 || data.num < 1) {
            return false;
        }
        return true;
    }
});

module.exports = router;