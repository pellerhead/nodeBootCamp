// jshint esversion:6
const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  //res.sendFile(__dirname + "/index.html");
  console.log("Get");
});

app.post("/", function(req, res) {
console.log("Post");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
