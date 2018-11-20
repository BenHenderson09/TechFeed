const server = require("./dist/server.js");

// --- Config ---
port = process.env.PORT || 3000;
host = "0.0.0.0";
process.env.SCRT_KEY = "MY_ScRt23";

// --- Server ---
server.app.listen(port, host, ()=>{
    console.log("Listening on port: "+ port);
});