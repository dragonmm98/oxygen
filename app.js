// Express  framework
const express = require ("express");
const app = express ();
const http = require("http");
const router = require("./router")
const router_bssr = require("./router_bssr");
const cookieParser = require("cookie-parser");
const cors = require("cors");



let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session") (session);
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: "sessions",
});


// Entry codes
app.use(express.static("public"));
app.use("/uploads", express.static(__dirname + "/uploads"))
app.use(express.json());
app.use (express.urlencoded({extended:true}));
app.use(cors({
    credentials:true,
    origin:true,
})
);
app.use (cookieParser());

// Session code
app.use(
    session ({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000* 60 * 30, // for 30 min
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(function (req,res,next) {
    res.locals.member = req.session.member;
    next();
});


// Views Codes 
app.set ("views", "views");
app.set ("view engine","ejs");


// //Routing codes
app.use ("/", router);
app.use ("/dealers", router_bssr)


const server = http.createServer(app);
module.exports= server;