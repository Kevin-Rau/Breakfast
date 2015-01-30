var moment = require('moment');

var current_time = function() {
  var current = moment().format('LL; LTS');
}

var from_now = function(date) {
  return moment(date, 'YYYY-MM-DD').fromNow();
}

exports.current_time = current_time;

exports.from_now = from_now;
