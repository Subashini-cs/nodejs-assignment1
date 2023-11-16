const express =require("express");
const app = express();
const path = require("path");
app.get("/html1",(req,res)=>{
    res.sendFile(path.join(__dirname,"news.html"));
})
app.get("/html2",(req,res)=>{
    res.sendFile(path.join(__dirname,"rain.html"));
})
app.get("/html3",(req,res)=>{
    res.sendFile(path.join(__dirname,"sports news.html"));
})
app.get("/html4",(req,res)=>{
    res.sendFile(path.join(__dirname,"tech.html"));
})
app.listen(3990,()=>{
    console.log("server is running");
})