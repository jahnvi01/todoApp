var http=require('http');
var fs=require('fs');
var todoc=require('./controllers/todoc');
var express=require('express');
var app=express();
app.set('view engine','ejs');
app.use(express.static('./public'));
todoc(app);




app.listen(3000);
