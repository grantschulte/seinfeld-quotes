'use strict';

// Dependencies

var express        = require('express');
var http           = require('http');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var router         = express.Router();
var app            = express();

// Db

var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost/seinfeld';

mongoose.connect(process.env.MONGOLAB_URI || mongoURI, function(err) {
  if(err) {
    console.log('DB: Connection Error', err, process.env.MONGOLAB_URI);
  }
  else {
    console.log('DB: Connection Successful');
  }
});

// Config

app.set('views', __dirname + '/app');
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(__dirname + '/app'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.engine('html', require('ejs').renderFile);

// Routes

app.use('/api/quotes', require('./routes/quotes'));

// Catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handling

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
  });
}

if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

// Root Route

app.get('/', function(req, res) {
  res.render('index');
});

// Create Server

var server = app.listen(app.get('port'), function() {
  console.log('Yo, we here.');
  console.log('Environment: ', app.get('env'));
  console.log('Views: ', app.get('views'));
  console.log('Host: ', server.address().address);
  console.log('Port: ', server.address().port);
});

// module.exports = app;
