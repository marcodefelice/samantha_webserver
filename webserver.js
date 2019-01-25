'use strict';
const http  = require('http');
const express = require("express"),
server      = express();
var mustacheExpress = require('mustache-express');

server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');
server.set('views', __dirname + '/Views');

var routes = require('./Routes/Routes');
routes(server);

server
  .listen(
    8888,
    function() {
      console.log(`
      Init webserver
      `);
    }
  )
