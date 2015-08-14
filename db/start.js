'use strict';

var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var dbUrl;

if (env === 'development') {
  dbUrl = 'mongodb://localhost/seinfeld';
}
else if (env === 'production') {
  dbUrl = 'mongodb://heroku_vgnvcn5s:l1vhv313e9g4l8ggjls3m2j5oo@ds033143.mongolab.com:33143/heroku_vgnvcn5s';
}

mongoose.connect(dbUrl, function(err) {
  if(err) {
    console.log('Connection Error', err);
  }
  else {
    console.log('Connection Successful');
  }
});
