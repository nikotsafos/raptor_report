// require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var passport = require('passport');
var session = require('express-session');

// declare app variable
var app = express();

// set amd use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false}));

// define routes
app.get('/', function(req, res){
  res.render('home');
});

// listen on port 3000
app.listen(3000);
