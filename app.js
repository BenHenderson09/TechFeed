const express        = require("express");
const bodyParser     = require("body-parser");
const mongoose       = require("mongoose");
const session        = require("express-session");
const cookieSession = require('cookie-session');
const passport       = require("passport");
const config         = require("./config/database.js");
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

/*router.use(cookieSession({
    name: 'session',
    keys: [process.env.SCRT_KEY],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));*/

  
// Setup passport
router.use(passport.initialize());
router.use(passport.session());

// Bodyparser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

// Make images public
router.use("/uploads", express.static("uploads"));
router.use(express.static("client"));

module.exports = router;