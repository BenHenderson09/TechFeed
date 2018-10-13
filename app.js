const express          = require("express");
const bodyParser       = require("body-parser");
const path             = require("path");
const mongoose         = require("mongoose");
const cookieParser     = require("cookie-parser");
const session          = require("express-session");
const passport         = require("passport");
const LocalStrategy    = require("passport-local").Strategy;
const config           = require("./config/database.js");
const prerender        = require('prerender-node');
const bcrypt           = require("bcryptjs");
const auth             = require("./routes/auth.js");
const posts            = require("./routes/posts.js");
const protected        = require("./routes/protected.js");
const app              = express();
const fs               = require('fs');

// --- Config ---
port = process.env.PORT || 3000;
host = "0.0.0.0";
process.env.SCRT_KEY = "MY_ScRt23";

app.use((req,res,next)=>{
    process.env.user = req.user || undefined;
    next();
});

// Connect to MongoDB
mongoose.connect(config.db);
var dbconnection = mongoose.connection;

// Check mongo connection
dbconnection.once('open', ()=>{
    console.log("Database Connection Established");
});

// Express session middleware
app.use(session({
    secret:process.env.SCRT_KEY,
    saveUninitialized:false,
    resave:false,
    cookie: {
        secure: false,
        maxAge: 365 * 24 * 60 * 60 * 1000 // 1 year
    }
}));

// Setup prerender
app.use(prerender);

// Setup passport
app.use(passport.initialize());
app.use(passport.session());

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set path to angular
app.use(express.static(path.join(__dirname,"./client/dist/browser")));

// Make images public
app.use("/uploads",express.static("uploads"));
app.use(express.static("client"));
// Routing
app.use("/api/auth", auth);
app.use("/api/posts", posts);
app.use(protected);

// Send all routes that don't match to angular router
app.get("*",function(req, res) {
    let clientPath = path.join(__dirname, "/client/dist/browser/index.html");
    res.sendFile(clientPath);
});

// --- Server ---
app.listen(port, host, ()=>{
    console.log("Listening on port: "+ port);
});
