/**
 * Created by BernardKlatkaSquiz on 23/10/16.
 */


module.exports = function(mysqlConnection){
  return {
    mysqlQuery: function(query, fn){
        mysqlConnection.query(query, function(err, results){
            if(err) throw err;
            fn(results);
        });



    }
  };
};