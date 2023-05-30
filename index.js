const express = require("express");
const res = require("express/lib/response");
const app = express();
const path=require("path");
const hbs = require("hbs");
const async = require("hbs/lib/async");
const userCollection = require("./operations/mongoDB/mongo")

const tempelatePath = path.join(__dirname,'./tempelates')

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static('img'))
//app.use(express.static('voice'))
app.use(express.static('public'))
app.use(express.static('operations/voiceR'))
app.use(express.static('operations/video'))
app.use(express.static('bower_components'))

app.get("/", (req,res)=>{
    res.render("SeaGuide");
});
app.get("/signup", (req,res)=>{
    res.render("signup");
});
app.get("/login", (req,res)=>{
    res.render("login");
});
app.post("/signup",async (req,res)=>{
    const data = {
        userName: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    await userCollection.insertMany([data])
    res.render("home")
});
app.get("/V", (req,res)=>{
    res.render("pruebaVideo");
});

app.post("/login",async (req,res) =>{
    const check = await userCollection.findOne({ email:req.body.email })
    try{
        if(check.password === req.body.password && check.email === req.body.email){
            res.render("apto");
        }else{
            res.send("Email y/o constraseña ingresada incorrecta");
        }
    }
    catch{
        res.send("La información igresada no ha sido la indicada");
    }
})

app.listen(3000, ()=>{
    console.log("Port connected");
});