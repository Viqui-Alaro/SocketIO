
const socket = io();


function checkSocketStatus(){
    console.log("Estado del socket: "+socket.connected);
}


socket.on("connect",()=>{
    console.log("El socket se ha conectado: ",socket.id);
    checkSocketStatus();

});

socket.on("disconnect",()=>{
    console.log("El socket se ha desconectado: ",socket.id);
    checkSocketStatus();

});