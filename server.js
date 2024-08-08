const express = require('express');
const server = express();

server.get("/", (req, res) => {
    res.write('welcome to express server');
    res.end();
})

// server.get("/",(req,res)=>{
//     res.send('get method-1');
// })

server.get("/user", (req, res) => {
    res.status(200);
    res.json({ message: 'use GET method' });
})
server.post("/user", (req, res) => {
    res.status(201);
    res.json({ message: 'use POST method' });
})
server.put("/user", (req, res) => {
    // res.status(201);
    res.json({ message: 'use PUT method' });
})
server.patch("/user", (req, res) => {
    // res.status(201);
    res.json({ message: 'use PATCH method' });
})
server.delete("/user", (req, res) => {
    // res.status(201);
    res.json({ message: 'use DELETE method' });
})
server.patch("/admin", (req, res) => {
    // res.status(201);
    res.json({ message: 'Admin patch method' });
})
server.delete("/admin", (req, res) => {
    // res.status(201);
    res.json({ message: 'Admin DELETE method' });
})

server.listen(1234, () => {
    console.log('server start at http://localhost:1234');

})