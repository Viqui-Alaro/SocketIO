
const socket = io();


// selecciono mis 3 botones que me permiten conectarme a las salas
const connectRoom1 = document.querySelector("#connectRoom1");
const connectRoom2 = document.querySelector("#connectRoom2");
const connectRoom3 = document.querySelector("#connectRoom3");


// eventos para que al hacer click me conecte a las salas

connectRoom1.addEventListener("click",()=>{
    socket.emit("connect to room","room1");
});

connectRoom2.addEventListener("click",()=>{
    socket.emit("connect to room","room2");
});

connectRoom3.addEventListener("click",()=>{
    socket.emit("connect to room","room3");
});

//Enviar Mensaje

const sendMessage = document.querySelector("#sendMessage");

sendMessage.addEventListener("click",()=>{
    const message = prompt("Escribe tu mensaje:");

    socket.emit("message",message);
});   


//Recibir el evento del mesaje

socket.on("send message", data=>{
    const {room} =data;
    const {message} =data;

    const li = document.createElement("li");
    li.textContent = message;

    document.querySelector(`#${room}`).append(li);
});