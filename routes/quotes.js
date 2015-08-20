'use strict';

var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Quote    = require('../models/Quote.js');
var url      = require('url');

router.get('/', function(req, res, next) {
  var query = url.parse(req.url, true).query;
  var params = {};

  if (query.author) {
    params = {
      author: query.author
    };
  }

  Quote.find(params, function(err, quotes) {
    if (err) { return next(err) }
    res.json(quotes);
  });
});

router.post('/', function(req, res, next) {
  Quote.create(req.body, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

router.get('/:id', function(req, res, next) {
  Quote.findById(req.params.id, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

router.put('/:id', function(req, res, next) {
  Quote.findByIdAndUpdate(req.params.id, req.body, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

router.delete('/:id', function(req, res, next) {
  Quote.findByIdAndRemove(req.params.id, req.body, function(err, quote) {
    if (err) { return next(err) }
    res.json(quote);
  });
});

module.exports = router;
