const express        = require("express");
const bodyParser     = require("body-parser");
const mongoose       = require("mongoose");
const cookieSession = require('cookie-session');
const passport       = require("passport");
const config         = require("./config/database.js");
const cloudinary     = require("cloudinary");
const router         = express.Router();

process.env.SCRT_KEY = "your secret";

router.use((req,res,next)=>{
    process.env.user = req.user || undefined;
    next();
});

// Configure cloudinary
cloudinary.config({ 
    cloud_name: 'your name', 
    api_key: 'your api key', 
    api_secret: 'your api secret' 
});

// Connect to MongoDB
mongoose.connect(config.db);
var dbconnection = mongoose.connection;

// Check mongo connection
dbconnection.once('open', ()=>{
    console.log("Database Connection Established");
});

router.use(cookieSession({
    name: 'session',
    keys: [process.env.SCRT_KEY],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
  
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