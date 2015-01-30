var time = require('./lib/time');

var express = require('express');
var parser  = require('body-parser');
var logger   = require('morgan');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development')

app.use(parser.json());
app.use(logger('dev'));

app.get('/api/1.0/current_time', function(req, res) {
  res.json({ status: true, time: time.current_time()});
});

app.post('/api/1.0/from_now', function(req, res) {
  res.json({ status: true, data: time.from_now(req.body.date)});
});
app.listen(app.get('port'), function() {
  var message = 'Express started on http://localhost:';
  console.log(message + app.get('port'));
  message = 'Express is executing in the ';
  console.log(message + app.get('env') + ' environment.');
});
