const express=require('express');
const app = new express();
const cors=require('cors');
// const userpost = require('./src/model/Userpost');
const Userdata = require('./src/model/Userdata');
const Postdata = require('./src/model/Postdata');


app.use(cors());
app.use(express.json());

app.get('/users', function(req,res){
    Userdata.find()
    .then(function(users){
        // console.log(res.body.users.name);
        res.send(users);
    })
    .catch(err => {
        console.log(err);
    });
});

app.get('/user/:id', function(req, res){
    const id =req.params.id
       Userdata.findOne({"_id":id})
    .then((user)=>{
          res.send(user);
      });
  });

  app.put('/approvalstatus',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    PostTitle = req.body.PostTitle,
    CreatedTime = req.body.CreatedTime,
    Description = req.body.Description,
    Image = req.body.Image ,
    Author = req.body.Author,
    AuthorID = req.body.Author,
    Status=req.body.Status
   Postdata.findByIdAndUpdate({"_id":id},
                                {$set:{
                                   "Status":"Status"
                                }})
   .then(function(){
       res.send();
   });
 });

 app.delete('/rejectPost/:id',(req,res)=>{
   
    id = req.params.id;
    Postdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
 app.get('/posts',function(req,res){
    
    Postdata.find()
                .then(function(posts){
                    res.send(posts);
                });
});
app.get('/post/:id',  (req, res) => {
  
    const id = req.params.id;
      Postdata.findOne({"_id":id})
      .then((post)=>{
          res.send(post);
      });
  })

  


  app.listen(3000, function(){
    console.log('listening to port 3000');
});