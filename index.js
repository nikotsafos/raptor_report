// require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var passport = require('./config/passportConfig');
var session = require('express-session');
var flash = require('connect-flash');

// declare app variable
var app = express();

// set amd use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(session({
  secret: 'abc',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware -- fun
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});

// Include controllers
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));



// define routes
app.get('/', function(req, res){
  res.render('home');
});

// listen on port 3000
app.listen(3000);
