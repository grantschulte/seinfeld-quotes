var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/seinfeld', function(err) {
  if(err) {
    console.log('Connection Error', err);
  }
  else {
    console.log('Connection Successful');
  }
});
