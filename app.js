const express        = require("express");
const bodyParser     = require("body-parser");
const path           = require("path");
const mongoose       = require("mongoose");
const cookieParser   = require("cookie-parser");
const session        = require("express-session");
const passport       = require("passport");
const LocalStrategy  = require("passport-local").Strategy;
const config         = require("./config/database.js");
const bcrypt         = require("bcryptjs");
const auth           = require("./routes/auth.js");
const posts          = require("./routes/posts.js");
const protected      = require("./routes/protected.js");
const cloudinary     = require("cloudinary");
const router         = express.Router();

process.env.SCRT_KEY = "MY_ScRt23";

router.use((req,res,next)=>{
    process.env.user = req.user || undefined;
    next();
});

// Configure cloudinary
cloudinary.config({ 
    cloud_name: 'technologyfeed', 
    api_key: '132798679696652', 
    api_secret: '6aBf01A0CPqL6oXDpwIhaRFBCuc' 
});

// Connect to MongoDB
mongoose.connect(config.db);
var dbconnection = mongoose.connection;

// Check mongo connection
dbconnection.once('open', ()=>{
    console.log("Database Connection Established");
});

// Express session middleware
router.use(session({
    secret:process.env.SCRT_KEY,
    saveUninitialized:false,
    resave:false,
    cookie: {
        secure: false,
        maxAge: 365 * 24 * 60 * 60 * 1000 // 1 year
    }
}));
  
// Setup passport
router.use(passport.initialize());
router.use(passport.session());

// Bodyparser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

// Make images public
router.use("/uploads",express.static("uploads"));
router.use(express.static("client"));

// Routing
router.use("/auth", auth);
router.use("/posts", posts);
router.use(protected);

module.exports = router;