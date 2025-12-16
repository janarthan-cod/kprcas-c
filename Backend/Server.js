const express = require("express");
const connectDb = require("./config/db")
const todoschema = require("./models/todo")
connectDb();
const app = express();
const PORT = 3000
app.get("/get",(req,res)=>{
    res.send("GET Route")
})
app.post("/get",(req,res)=>{
    res.send("POST Route")
})
app.put("/put",(req,res)=>{
    res.send("PUT Route")
})
app.delete("/delete",(req,res)=>{
    res.send("DELETE Route")
})
app.listen(3000,()=>{
    console.log('server running on http://localhost:3000')
})