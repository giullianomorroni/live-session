var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('assets'));

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

app.get('/single',function(req,res){
  res.sendFile(__dirname + '/single.html');
});

app.listen(8080);

console.log("Running at Port 8080");
