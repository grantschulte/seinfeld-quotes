var express     = require('express');
var path        = require('path');
var http        = require('http');
var router      = express.Router();
// var bodyParser  = require('body-parser');
var quotes      = require('./routes/quotes');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seinfeld', function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('connection successful');
  }
});

var app = express();

// Configuration

app.set('views', __dirname + '/app');
// app.use(express.logger('dev'));
// app.use(bodyParser);
app.use(router);
app.use(express.static(__dirname + '/app'));
app.engine('html', require('ejs').renderFile);

// Routes

app.use('/api/quotes', quotes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
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
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.use('/', function(req, res) {
  res.render('index.html');
});

http.createServer(app).listen(5000, function(){
  console.log('Express server listening on port ' + 5000);
});

// module.exports = app;
