var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Quote = require('../models/Quote.js');

router.get('/', function(req, res, next) {
  Quote.find(function(err, quotes) {
    if (err) { return next(err) }
    res.json(quotes);
  });
});

module.exports = router;
