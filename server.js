const express = require('express');
const server = express();

server.get('/', (req, res) => {
        res.write("Welcome Express Js");
        res.end();
})

// server.get('/', (req, res) => {
//     res.send("Get Method -1")
// })

server.get("/user",(req,res)=>{
    res.status(200);
    res.json({msg:"User get method"});
})

server.post("/user",(req,res)=>{
    res.status(201);
    res.json({msg:"User post method"});
})

server.put("/user",(req,res)=>{
    // res.status(201);
    res.json({msg:"User put method"});
})

server.patch('/user', (req, res) => {
    res.json({msg:"User patch method"});
})

server.delete('/user', (req, res) => {
    res.json({msg:"User Delete method"});
})

server.patch("/admin",(req,res)=>{
    res.json({msg:"Admin patch method"});
})

server.delete("/admin",(req,res)=>{
    res.json({msg:"Admin Delete method"});
})

server.listen(3500,()=>{
    console.log(`Server Start at http://localhost:3500`);   
})