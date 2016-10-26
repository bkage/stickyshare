/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */

var socket = io();

socket.on('usernames', function(msg){
    vueApp.userList = msg;
});