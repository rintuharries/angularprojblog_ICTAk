
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.snw4u.mongodb.net/ICTBlogWebsite?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    phone:String,
    usertype:String
});

var User=mongoose.model('Userprofile',UserSchema);

module.exports = User;