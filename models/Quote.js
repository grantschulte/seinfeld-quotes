var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = new Schema({
  body: String,
  author: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', QuoteSchema);
