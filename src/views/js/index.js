
const socket = io();

socket.on("Welcome",data =>{

    const text = document.querySelector("#text");
    text.textContent = data;

});

const emitToServer = document.querySelector("#emit-to-server");
emitToServer.addEventListener("click",()=>{

    socket.emit("server"," Hola, servidor");


});

socket.on("everyone",message =>{
    console.log(message);
});