/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */


var socketObject = {
    init: function () {
        var socket = io();
        socket.on('usernames', function(msg){
            vueObject.init(msg);
        });
    },
};

var vueObject = {
    init: function(msg){
        var vue = new Vue({
            el: '#app',
            data: {
                userAdmin: msg
            }
        })
    }
};


$(document).ready(function () {
    socketObject.init();
});