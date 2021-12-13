var http = require("http");
var url = require("url");
var fs = require("fs");
const express = require("express");

const path = require ('path');

var myOptionsOne = {
    
}

var app = express();
/* hi */ 

app.use(express.static('public'));


app.get('/', function (req,res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get


app.listen(process.env.PORT, 
	() => console.log("Server is running..."));