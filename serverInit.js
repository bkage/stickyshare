//Requires - server
var express = require('express');
var app = express();
var server = require('http').createServer(app);

//Requires - additional
var path = require('path');
var portfinder = require('portfinder');
var colors = require('colors');



var expressSettings = require(__dirname + '/app/server/expressSettings.js')(app, express);

var portLisiner = require(__dirname + '/app/server/portFinder.js')(portfinder, server, colors);

