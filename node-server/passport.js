var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

var mssql = require('./database/sql-server');

  
module.exports = function(db) {
  
  
  passport.use(new LocalStrategy(
    function(username, password, done) {
            
            
            //password is stored as plain text in the database, i am not including encription..
            console.log(username);
            mssql.getUser(username,password,done,db);
      
    }
  ));

  passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user.id);
    }
  });

  passport.deserializeUser(function(id, done) {
    
        mssql.getUserById(id,done,db);
        
        
  });

}