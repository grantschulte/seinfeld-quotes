'use strict';

var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var dbUrl;

if (env === 'development') {
  dbUrl = 'mongodb://localhost/seinfeld';
}
else if (env === 'production') {
  dbUrl = process.env.MONGOLAB_URI;
}

mongoose.connect(dbUrl, function(err) {
  if(err) {
    console.log('Connection Error', err);
  }
  else {
    console.log('Connection Successful');
  }
});
