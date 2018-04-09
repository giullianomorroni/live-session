var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/about',function(req,res){
  res.sendFile(__dirname + '/about.html');
});

app.get('/review',function(req,res){
  res.sendFile(__dirname + '/review.html');
});

app.get('/joinus',function(req,res){
  res.sendFile(__dirname + '/joinus.html');
});

app.get('/contact',function(req,res){
  res.sendFile(__dirname + '/contact.html');
});

app.use(express.static('assets'));

app.listen(8080);

console.log("Running at Port 8080");
