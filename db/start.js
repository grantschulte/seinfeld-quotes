'use strict';

var mongoose = require('mongoose');
var config = require('./config');
var env = process.env.NODE_ENV || 'development';
var dbUrl;

if (env === 'development') {
  dbUrl = config.DEV_URI;
}
else if (env === 'production') {
  dbUrl = config.MONGOLAB_URI;
}

mongoose.connect(dbUrl, function(err) {
  if(err) {
    console.log('Connection Error', err);
  }
  else {
    console.log('Connection Successful');
  }
});
