// db.js 
var mssql = require('mssql');

var config = {
    user: 'track-my-goods',
    password: 'Denmantm123',
    server: 'track-my-goods.database.windows.net', 
    database: 'track-my-goods',
    options :{ encrypt:true}
};


var connection = mssql.connect(config, function (err) {if (err)
        throw err; 
});

module.exports = connection; 