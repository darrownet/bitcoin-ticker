const events = require('events');
const express = require('express');
const fs = require('fs');
const http = require ('http');
const socketIO = require('socket.io');

const port = 8080;

const app = express()
  .use(express.static(__dirname + "/"))
  .get('*', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
  });

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {

  console.log('client connected');

  socket.on('disconnect', () => {
    console.log('clien disconnected');
  });

});
