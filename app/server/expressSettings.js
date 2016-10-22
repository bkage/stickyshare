/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */


module.exports = function(app, express){
    //static files
    app.use('/static', express.static(__dirname + '/app/static'));


    //serve files
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/app/html/index.html'));
    });
};