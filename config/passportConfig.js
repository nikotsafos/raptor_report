// require needed modules
var passport = require('passport');
var passportLocalStrategy = require('passport-local').Strategy;

// declare variables
var db = require('../models');

// provide serialize/ deserialize function so we can use session
passport.serializeUser(function(user, callback){
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback){
  db.user.findById(id).then(function(user){
    callback(null, user);
  }).catch(function(err){
    callback(err, null);
  });
});

// Do the actual work logging in part
passport.use(new passportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, callback){
  db.user.findOne({
    where: {email: email}
  }).then(function(foundUser){
    if(!foundUser || !foundUser.isValidPassword(password)){
      callback(null, null);
    }
    else {
      callback(null, foundUser);
    }
  }).catch(function(err){
    callback(err, null);
  })
}));

module.exports = passport;
