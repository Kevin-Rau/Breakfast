var skeleton    = require('skeleton');

skeleton.connect('mongodb://localhost/simple');

var breakfastSchema = {
  id: Number,
  breakfast: String,
  rating: Number
}

function breakfastinit(){
  return skeleton.model('Breakfast', breakfastSchema, 'breakfasts');
}


exports.breakfastinit = breakfastinit;
