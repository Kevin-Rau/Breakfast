var database= require('./mongo.js');
var data = require('../data.json')
var Breakfast = database.breakfastinit();


module.exports = function(app){


// Returns # of entries in the field

app.get('/count', function(req,res){
    Breakfast.count(function(err,count){
      res.status(200).send(count.toString())
    });
});



// Gets field in the database with the given id

app.get('/breakfast/:id', function(req,res){
    Breakfast.find({id:req.params.id}).find(function(err,doc){
      if(err) res.send(err);
      res.status(200).send(doc);
    });
});



// Deletes entry

app.delete('/breakfast/:id', function(req,res){
    Breakfast.remove( {id:req.params.id}, function(err,breakfast){
      if(err) res.send(err);
      res.status(200).send("removed "+req.params.id);
    });
});



// Updates entry with given id

  app.put('/person/:id', function(req, res){
    var query = {id:req.params.id};
    var update = req.query;
    var options = {new:true, $set:update};
    Breakfast.findOneAndUpdate(query, update, options, function(err,breakfast){
      if(err) res.send(err);
      res.status(200).send(breakfast);
    });
  });


// Displays everything

  app.get('/breakfast', function(req,res){
    Breakfast.find(function(err,doc){
      if(err) res.send(err);
      res.status(200).send(doc);
    });
  });



