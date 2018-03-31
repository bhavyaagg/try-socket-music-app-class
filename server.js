/**
 * Created by bhavyaagg on 31/03/18.
 */

const express = require('express')
const app = express();

const http = require('http');
const socketIO = require('socket.io');

const server = http.Server(app);
const io = socketIO(server);

const sockets = [];

io.on('connection', (socket) => {
  console.log("Socket Connected: " + socket.id);
  sockets.push(socket.id)
  
  socket.on('music', function (id) {
    let randomSocketId = sockets[Math.floor(Math.random() * sockets.length)];
    console.log(randomSocketId)
    io.to(randomSocketId).emit('music', id);
  })
  
  socket.on('disconnect', () => {
    sockets.splice(sockets.indexOf(socket.id), 1);
    console.log("abc")
  })
  
})

app.use('/', express.static(__dirname + '/public'))

server.listen(5555, () => {
  console.log("Server listening on http://localhost:5555/");
})