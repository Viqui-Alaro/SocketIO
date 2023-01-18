const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { Socket } = require("dgram");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname,"views")))

const socketsOnline =[];

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});


io.on("connection", socket =>{

    socketsOnline.push(socket.id);

    // Emisión Básica
    socket.emit("Welcome","Ahora estás conectado.");

    socket.on("server",data=>{
        console.log(data);
    });

    // Emisión a Todos
    io.emit("everyone", socket.id + " se ha conectado ");


     // Emisión a uno solo
     socket.on("last", message=>{

       const lastSocket= socketsOnline[socketsOnline.length(-1)];
       //const lastSocket= socketsOnline.at(-1); 
       io.to(lastSocket).emit("salute",message);

     });

/*
     socket.emit("on", "holi");
     socket.emit("on", "holi");

         socket.emit("once","holi");
     socket.emit("once","holi");

*/


     socket.emit("off","holi");
     setTimeout(()=>{
        socket.emit("off","holi");
     },3000);
 
});


httpServer.listen(4040);