var express  = require('express');
var quotes   = express.Router();
var mongoose = require('mongoose');
var Quote    = require('../models/Quote.js');

quotes.get('/', function(req, res, next) {
  Quote.find(function(err, quotes) {
    if (err) { return next(err) }
    res.json(quotes);
  });
});

quotes.post('/', function(req, res, next) {
  Quote.create(req.body, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

quotes.get('/:id', function(req, res, next) {
  Quote.findById(req.params.id, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

quotes.put('/:id', function(req, res, next) {
  Quote.findByIdAndUpdate(req.params.id, req.body, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

quotes.delete('/:id', function(req, res, next) {
  Quote.findByIdAndRemove(req.params.id, req.body, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

module.exports = quotes;
