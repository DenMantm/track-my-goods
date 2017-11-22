var auth = require('./auth'),
  path = require('path');

var fs = require('fs');

var mssql = require('./database/sql-server');


module.exports = function(app,connection) {

  //Custom paths
    app.get('/landingPage', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });

    app.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });


  app.get('/api/getTruckList', function(req,res){
    
    mssql.getTruckFleet(res,connection);
    
  });
  
  
    app.get('/api/insertTruckRecords', function(req,res){
    
    mssql.insertTruckRecords(connection,res);
    
  });
  
  
  app.get('/api/getTruckRecords', function(req,res){
    
    mssql.getTruckRecords(connection,res);
    
  });
  

  app.post('/api/login', auth.authenticate);
  app.get('/api/currentIdentity', auth.getCurrentIdentity);


  app.get('/api/logout', function(req, res) {
    req.logout();
    res.end();
  });


  app.get('/app/*', function(req, res) {
    res.sendStatus(404);
  });
  
  app.get('/node_modules/*', function(req, res) {
    res.sendStatus(404);
  });

    app.get('/node-server/*', function(req, res) {
    res.sendStatus(404);
  });

  app.get('*', function(req, res) {
    console.log('404 error', req.path);
    res.sendStatus(404);
  });


  app.get('/404', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });



}


// route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.send({error:"You are not logged in"});
}