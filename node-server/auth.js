var passport = require('passport');

// super important that you use "username" in the body.
exports.authenticate = function(req, res, next) {
  console.log(req.body);
  //req.body.username = req.body.username.toLowerCase();
  var auth = passport.authenticate('local', function(err, user) {
    if(err) {return next(err);}
    if(!user) { 
      res.json({status:'failed'}); 
      
    }
    req.logIn(user, function(err) {
      if(err) {return next(err);}
      res.send({success:true, user: user});
    })
  })
  auth(req, res, next);
};

exports.getCurrentIdentity = function(req, res, next) {
  console.log("Sending this value: ");
  console.log(req.user);
  res.status(200).send(req.user);
  res.end();
}

exports.requiresApiLogin = function(req, res, next) {
  if(!req.isAuthenticated()) {
    res.status(403);
    res.end();
  } else {
    next();
  }
};
