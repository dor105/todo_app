const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [ ];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){

let today = new Date();
let options = {
   weekday: "long",
   day: "numeric",
   month: "long"
   };
var day = today.toLocaleDateString("en-US", options);
res.render("list", {kindOfDay: day,newlistitem: items});
});
app.post ("/",function(req, res){
   let item = req.body.newitem;
    items.push(item);
    res.redirect("/")
    
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");});


//need2fix

// //jshint esversion:6
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://82.103.188.4:27017';

// // Database Name
// const dbName = 'projectDB';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });
