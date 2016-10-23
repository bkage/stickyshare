/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */

module.exports = function(mysql, colors){
    var mysqlConnection = mysql.createConnection({
        connectionLimit : 100, //important
        host            : 'localhost',
        user            : 'stickyshare',
        password        : 'admin',
        database        : 'sticky_share'
    });

    mysqlConnection.query('SELECT 1+1 as result' ,function(err, result) {

        if(err){
            console.log(colors.red('Error connecting to DB'));
            throw err;
        }
        console.log(colors.green('Successfully connected to DB'));
    });

    return mysqlConnection;

};