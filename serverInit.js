//Requires - server
var express     = require('express');
var app         = express();

//Requires - socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Requires - additional
var path        = require('path');
var portfinder  = require('portfinder');
var colors      = require('colors');
var mysql       = require('mysql');

//serve static files
app.use('/static', express.static(path.join(__dirname, '/app/static')));

//connect to sql DB
var mysqlConnection = require(__dirname + '/app/server/dbConnect.js')(mysql, colors);

//helper methods
var helperMethods = require(__dirname + '/app/helpers/helperMethods.js')(mysqlConnection);

//server options
var expressSettings = require(__dirname + '/app/server/expressSettings.js')(app, express, path, mysqlConnection);

//find open port and start server
var portFinder = require(__dirname + '/app/server/portFinder.js')(portfinder, http, colors);


io.on('connection', function(socket){
    console.log(colors.blue('User connected. Socket established.'));

    helperMethods.mysqlQuery('SELECT * FROM users', function(response){
       socket.emit('usernames', response);
    });

    socket.on('disconnect', function(){
        console.log(colors.red('User disconnected'));
    });
})
