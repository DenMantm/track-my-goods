var express = require('express');
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 8808

var app = express();

var db = require("./database/db"); 


require('./expressConfig')(app);

require('./passport')(db);

require('./routes')(app,db);

app.listen(port);
console.log('Listening on port ' + port + '...');