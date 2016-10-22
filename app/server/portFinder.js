/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */

module.exports = function(portfinder, server, colors){
    //portFinder
    portfinder.basePort = process.env.PORT || 3000;	//default port/ process.env.PORT - environment port variable
    portfinder.getPort(function (err, port) {
        server.listen(port);
        console.log(colors.green('Running StickyShare on port: ' + port));
    });
};