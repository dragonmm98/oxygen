// Express  framework
const express = require ("express");
const app = express ();
const http = require("http");



let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session") (session);
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: "sessions",
});


// Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use (express.urlencoded({extended:true}));

// Views Codes 
app.set ("views", "views");
app.set ("view engine","ejs");


// //Routing codes


const server = http.createServer(app);
module.exports= server;