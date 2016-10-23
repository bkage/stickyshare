/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */


var socketObject = {
    init: function () {
        var socket = io();
        socket.on('usernames', function(msg){
            vueApp.userList = msg;
        });
    }, 
};

$(document).ready(function () {
    socketObject.init();
});