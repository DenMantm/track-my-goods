
//track-my-goods.database.windows.net
//track-my-goods
//Denmantm123

var sql = require('mssql');


exports.getUser = function(username,password,done,connection){
    
    var sqlQuery = "select * from users where username = " + "'"+username+"'";
    
    var request = new sql.Request(connection);

    // query to the database and get the records
    request.query(sqlQuery, function (err, recordset) {

        if (err){
        done(err);
        }
        
        if(recordset[0].password == password){
        // send records as a response
        console.log(recordset);
        if(recordset!= undefined){
        if(recordset.length!=0){
            done(null, recordset[0]);
        }
        else {
            done(null, false);
        }
        }
        }
        else{
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
        if(recordset!= undefined){
        if(recordset.length!=0){
            done(null, recordset[0]);
        }
        else {
            done(null, false);
        }
        }
        
        
        //res.send(recordset);

    });
}



exports.getTruckFleet = function(res,connection){
    var sqlQuery = "select * from truck_fleet";
    
        // create Request object
    var request = new sql.Request(connection);

    // query to the database and get the records
    request.query(sqlQuery, function (err, recordset) {

        if (err){
            res.send(err);
        }

        if(recordset!= undefined){
        
        if(recordset.length!=0){
            
            res.send(recordset);

        }
        else {
            res.send(null);
        }
        }


    });
    

    
}

exports.insertTruckRecords = function(connection,res){
        var sqlQuery = "select * from truck_fleet";
    
        // create Request object
    var request = new sql.Request(connection);

    // query to the database and get the records
    request.query(sqlQuery, function (err, recordset) {

        if (err){
            console.log(err);
            return;
        }

        if(recordset!= undefined){
        
        if(recordset.length!=0){

            var tmpSql = "UPDATE truck_record SET is_active = 'False'";
            
            request.query(tmpSql, function (err, recordsetx) {
                if (err){
                    console.log(err);
                    return;
                }
                
                recordset.forEach(item=>{
                
                var truck_id = item.truck_id;
                var start_lat = generateLat();
                var start_lng = generateLong();
                var finish_lat = generateLat();
                var finish_lng = generateLong();
                
                var sqlQ = `INSERT INTO truck_record VALUES(
                '${truck_id}',
                '${start_lat}',
                '${start_lng}',
                '${finish_lat}',
                '${finish_lng}',
                'driver name',
                'goods transportating',
                'True'
                )`;

                request.query(sqlQ, function (err, recordsetm) {
                if (err){
                    console.log(err);
                    return;
                }
            })
            })

            })
            res.send(null);
            
            
            

        }
        else {
            res.send(null);
        }
        }


    });
    
    
exports.getTruckRecords = function(connection,res){
    var sqlQuery = "select * from truck_record";
        // create Request object
    var request = new sql.Request(connection);

    // query to the database and get the records
    request.query(sqlQuery, function (err, recordset) {
        if (err){
            res.send(err);
        }

        if(recordset!= undefined){
        
        if(recordset.length!=0){
            
            res.send(recordset);

        }
        else {
            res.send(null);
        }
        }

    });

    
}
    
    
    
    
    
    
    
    
}



 function generateLat(){
      	return parseFloat((Math.random() * (54.177045 - 52.636095) + 52.636095).toFixed(6));
      }
      
 function generateLong(){
      	return  parseFloat((Math.random() * (-9.034711 - (-6.330045)) + (-6.330045)).toFixed(6));
      }


    