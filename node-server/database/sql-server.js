
//track-my-goods.database.windows.net
//track-my-goods
//Denmantm123

var sql = require('mssql');


exports.getUser = function(username,done,connection){
    
    
    var sqlQuery = "select * from users where username = " + "'"+username+"'";
    
    var request = new sql.Request(connection);

    // query to the database and get the records
    request.query(sqlQuery, function (err, recordset) {

        if (err){
        done(err);
        }

        // send records as a response
        console.log(recordset);
        
        if(recordset.length!=0){
            done(null, recordset[0]);
        }
        else {
            done(null, false);
        }
        
        
        //res.send(recordset);

    });
    
}

exports.getUserById = function(id,done,connection){
    
    var sqlQuery = "select * from users where id = " + "'"+id+"'";
    
        // create Request object
    var request = new sql.Request(connection);

    // query to the database and get the records
    request.query(sqlQuery, function (err, recordset) {

        if (err){
            done(err);
        }

        // send records as a response
        console.log(recordset);
        
        if(recordset.length!=0){
            done(null, recordset[0]);
        }
        else {
            done(null, false);
        }
        
        
        //res.send(recordset);

    });
}
    