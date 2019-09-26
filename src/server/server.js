const express = require('express');
const http = require ('http');

const port = 8080;

const app = express()
  .use(express.static(__dirname + "/"))
  .get('*', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
  });

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});
