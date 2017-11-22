var express = require('express');
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 8808

var app = express();

var db = require("./database/db"); 

// var mssql = require('mssql');

// var config = {
//     user: 'track-my-goods',
//     password: 'Denmantm123',
//     server: 'track-my-goods.database.windows.net', 
//     database: 'track-my-goods',
//     options :{ encrypt:true}
// };


// var connection = mssql.connect(config, function (err) {if (err)
//         throw err; 
// });


// config for your database

//database connection

// var mongoose = require('mongoose');

//var mssql = require('./database/sql-server.js');


require('./expressConfig')(app);

require('./passport')(db);

require('./routes')(app,db);

app.listen(port);
console.log('Listening on port ' + port + '...');