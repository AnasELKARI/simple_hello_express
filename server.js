//port
var appPort = 16558;

// Librairies
var fs = require('fs');
var express = require('express'), app = express();
var http = require('http')
  , server = http.createServer(function(req, res){
    console.log("heere on localhost:" + appPort);
    fs.createReadStream('text').on('data', function(data) {
      console.log("connections made localhost:" + appPort);
      res.write(data);
      res.end();
    });
  }).listen(appPort);
console.log("connections to be made on localhost:" + appPort);

// Handle the socket.io connections

var users = 0; //count the users
