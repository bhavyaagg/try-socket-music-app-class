/**
 * Created by bhavyaagg on 31/03/18.
 */

const express = require('express')
const app = express();

const http = require('http');
const socketIO = require('socket.io');

const server = http.Server(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log("Socket Connected: " + socket.id);
})

app.use(express.static(__dirname + '/public'))

app.listen(5555, () => {
  console.log("Server listening on http://localhost:5555/");
})