/**
 * Created by bhavyaagg on 31/03/18.
 */
const socket = io();

function play(id) {
  socket.emit('music', id);
}

$(document).ready(function () {
  socket.on('music', function (id) {
    $(`#a${id}`)[0].play();
  })
});