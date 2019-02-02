var mysql=require('mysql');
var db=mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "jahnvi123",
    database : "node",
});

db.connect((err)=>{
if(err){throw err;}
else{console.log("connected")};
});

var bodyparser=require('body-parser');
var url=bodyparser.urlencoded({extended:false});
module.exports=function(app){

app.get('/todo',function(req,res){
var sql="select * from todo";
db.query(sql,(err,arr)=>{
if(err)throw err;

res.render('todo',{todos:arr});
});

});

app.post('/todo',url,function(req,res){
    var x=req.query.item;
    
console.log(x);
     sql="insert into todo (item) values (?)";
    console.log(sql);
    db.query(sql,[x],(err,results,fields)=>{
        if(err)throw err;
        res.json(x); 
        });
   

});

app.delete('/todo',url,function(req,res){
  //  console.log(req.query.item);
  var x=req.query.item;
  sql="delete from todo where item= ?";
  console.log(sql);
  db.query(sql,[x],(err,results,fields)=>{
      if(err)throw err;
      res.json(x); 
      });

});

}