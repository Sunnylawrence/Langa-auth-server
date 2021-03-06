//jshint esversion:6
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true});

const userSchema={
    email:String,
    password:String
};

const user = new mongoose.model("user", userSchema);


app.get("/",(req, res)=>{
    res.render("home");
});
app.get("/login",(req, res)=>{
    res.render("login");
});
app.get("/register",(req, res)=>{
    res.render("register");
});



app.post("/register", (req, res)=>{
    const newUser = new user({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save((err)=>{
        if(err){
            console.log(err);
        }else{
            res.render("main-page");
        }
       
    });
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
});