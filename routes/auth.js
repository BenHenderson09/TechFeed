const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/users.js");
const Post = require("../models/posts.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const router = express.Router();

// Check if user is unique
router.post("/unique", (req, res) => {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) { console.log(err); throw err; }

        if (user.length > 0) {
            res.json({ message: "This email is already in use", success: false, matches: "email" });
        }
        else {
            User.find({ username: req.body.username }, (err, user) => {
                if (err) { console.log(err); throw err; }

                if (user.length > 0) {
                    res.json({ message: "This username is already in use", success: false, matches: "username" });
                }
                else {
                    res.json({ message: "The provided details are unique", success: true, matches: "none" });
                }
            });
        }
    });
});

// Register
router.post("/register", (req, res) => {

    var newUser = new User({
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    });

    // Convert time to dd-mm-yy
    date = new Date(newUser.created);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) { day = "0" + day; }
    if (month < 10) { month = "0" + month; }
    newUser.created = day + "-" + month + "-" + year;

    if (validate()) {
        // Ensure user is unique
        User.find({ email: newUser.email }, (err, user) => {
            if (err) { console.log(err); throw err; }

            if (user.length > 0) {
                res.sendStatus(403);
            }
            else {
                User.find({ username: req.body.username }, (err, user) => {
                    if (err) { console.log(err); throw err; }

                    if (user.length > 0) {
                        res.sendStatus(403);
                    } else {
                        bcrypt.genSalt(10, (err, salt) => {
                            if (err) { console.log(err); throw err; }

                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) { console.log(err); throw err; }
                                newUser.password = hash;

                                newUser.save((err, user) => {
                                    if (err) { console.log(err); throw err; }
                                    res.json({ message: "Registration Successful", success: true });
                                });
                            });
                        });
                    }
                });
            }
        });
    } else {
        res.sendStatus(403);
    }

    // Authenticate values
    function validate() {
        if (newUser.username != undefined) {
            if (newUser.username.length <= 5) {
                return false;
            }
            if (newUser.username.length >= 30) {
                return false;
            }
        } else {
            return false;
        }

        // --- Fullname ---
        if (newUser.fullname != undefined) {
            if (newUser.fullname.length < 2) {
                return false;
            }
            if (newUser.fullname.length >= 50) {
                return false;
            }
            if (newUser.fullname.match(/\d+/g) != null) {
                return false;
            }
        } else {
            return false;
        }

        // --- Email ---
        if (newUser.email != undefined) {
            if (newUser.email.length <= 5) {
                return false;
            }
            if (newUser.email.length >= 50) {
                return false;
            }
            if (!newUser.email.includes("@")) {
                return false;
            }
        } else {
            return false;
        }

        // --- Password ---
        if (newUser.password != undefined) {
            if (newUser.password.length <= 5) {
                return false;
            }
            if (newUser.password.length >= 50) {
                return false;
            }
            if (newUser.password.match(/\d+/g) == null) {
                return false;
            }
            if (newUser.password.match(/[a-z]/i) == null) {
                return false;
            }
        } else {
            return false;
        }

        return true;
    }
});

// Update User
router.post("/update", (req, res) => {

    if (validate(req.body)) {
        User.findOne({ _id: req.body.id }, (err, user) => {
            if (err) { console.log(err); throw err; }

            // Update the author of posts if username has been changed
            if (user.username != req.body.username) {

                Post.find({ author: user.username }, (err, posts) => {
                    if (err) { console.log(err); throw err; }

                    posts.forEach(post => {
                        post.author = req.body.username;
                        post.save((err, post) => {
                            if (err) { console.log(err); throw err; }
                        });
                    });
                });
            }

            user.username = req.body.username;
            user.email = req.body.email;
            user.fullname = req.body.fullname;

            user.save((err, user) => {
                if (err) { console.log(err); throw err; }
                res.json({ message: "Account updated successfully", success: true });
            });
        });
    } else {
        res.sendStatus(403);
    }

    function validate(data) {
        if (req.user) {
            if (req.user._id != data.id) {
                return false;
            }
        } else {
            return false;
        }

        // --- Username ---
        if (data.username != undefined) {
            if (data.username.length <= 5) {
                return false;
            }
            if (data.username.length >= 30) {
                return false;
            }
        } else {
            return false;
        }

        // --- Fullname ---
        if (data.fullname != undefined) {
            if (data.fullname.length < 2) {
                return false;
            }
            if (data.fullname.length >= 50) {
                return false;
            }
            if (data.fullname.match(/\d+/g) != null) {
                return false;
            }
        } else {
            return false;
        }

        // --- Email ---
        if (data.email != undefined) {
            if (data.email.length <= 5) {
                return false;
            }
            if (data.email.length >= 50) {
                return false;
            }
            if (!data.email.includes("@")) {
                return false;
            }
        } else {
            return false;
        }
        return true;
    }
});

// Delete User
router.delete("/delete", (req, res) => {
    if (req.user) {
        if (req.user._id == req.body.id) {
            User.deleteOne({ _id: req.body.id }, (err, user) => {
                if (err) { console.log(err); throw err; }
                res.json({ message: "Deletion Successful", success: true });
            });
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
});

// Set the post count
router.post("/postcount", (req, res) => {

    if (req.user) {
        if (req.user._id == req.body.id) {

            Post.find({ author: req.body.username }, (err, posts) => {
                if (err) { console.log(err); throw err; }

                User.findOne({ _id: req.body.id }, (err, user) => {
                    if (err) { console.log(err); throw err; }

                    user.posts = posts.length;
                    user.save((err, user) => {
                        if (err) { console.log(err); throw err; }
                        res.json({ postcount: user.posts, success: true });
                    });
                });
            });
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
});

// Set the vote count
router.post("/votecount", (req, res) => {
    if (req.user) {
        if (req.user._id == req.body.id) {

            Post.find({ author: req.body.username }, (err, posts) => {
                if (err) { console.log(err); throw err; }
                let votecount = 0;

                posts.forEach(post => {
                    votecount += post.votes;
                });

                User.findOne({ _id: req.body.id }, (err, user) => {
                    if (err) { console.log(err); throw err; }

                    user.votes = votecount;
                    user.save((err, user) => {
                        if (err) { console.log(err); throw err; }
                        res.json({ votecount: user.votes, success: true });
                    });
                });
            });
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
});

// --- Login ---
// Setting up passport local
passport.use(new LocalStrategy({

    usernameField: "email",
    passwordField: "password"

},
    (email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
            if (err) { return done(err); }

            if (!user) {
                return done(null, false, { message: 'Incorrect Credentials.', success: false });
            }

            //Ensure correct password
            bcrypt.compare(password, user.password, (err, matched) => {
                if (err) { throw err; }
                if (matched) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect Credentials.', success: false });
                }
            });
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


router.post("/login", (req, res) => {

    passport.authenticate('local', (err, user) => {
        if (err) { return next(err); }

        if (!user) { return res.json({ success: false, message: 'Email or password is invalid.' }); }

        req.logIn(user, (err) => {
            if (err) { return next(err); }
            return res.json({ success: true, message: 'User logged in.' });
        });
    })(req, res);
});

// --- Check if user is authenticated ---
router.get("/authenticated", (req, res) => {
    if (req.user) {
        return res.json({
            authenticated: true,
            username: req.user.username,
            email: req.user.email,
            fullname: req.user.fullname,
            created: req.user.created,
            votes: req.user.votes,
            posts: req.user.posts,
            id: req.user._id
        });
    } else {
        return res.json({ authenticated: false });
    }
});

// Get user by username
router.post("/username", (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) { console.log(err); throw err; }
        res.json(user);
    });
});

// --- Logout ---
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect("/");
})

module.exports = router;