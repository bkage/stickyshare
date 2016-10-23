/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */


module.exports = function(app, express, path, mysqlConnection){
    


    //serve files
    app.get('/', function (req, res) {
        res.sendFile(path.resolve('app/html/index.html'));
    });


};