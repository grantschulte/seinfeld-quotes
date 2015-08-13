// Dependencies

var express        = require('express');
var http           = require('http');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var dbStart        = require('./db/start');

var router = express.Router();
var app    = express();
var env;

// Config

app.set('views', __dirname + '/app');
app.use(router);
app.use(express.static(__dirname + '/app'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.engine('html', require('ejs').renderFile);

// Env Config

env = process.env.NODE_ENV || 'development';
if (env === 'development') { }

// Routes

app.use('/api/quotes', require('./routes/quotes'));

// Catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
  });
}

// production error handler

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Root Route

app.get('/', function(req, res) {
  res.render('index.html');
});

// Create Server

app.listen(5000, function() {
  console.log('The shit works.');
});

// module.exports = app;
