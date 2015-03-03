var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET Userlist (list of all current entries) page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});




/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var breakFast = req.body.breakfast;
    var raTings = req.body.rating;

    // Set our collection
	console.log("Before Post");
    var collection = db.get('usercollection');
	console.log("Im post");
    // Submit to the DB
    collection.insert({
        "breakfast" : breakFast,
        "rating" : raTings
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

/* GET Update User page. */
router.get('/updateuser', function(req, res) {
    res.render('updateuser', { title: 'Add New User' });
});


/*PUT modify user, used to change ratings */
router.post('/modifyuser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var breakFast = req.body.breakfast;
    var raTings = req.body.rating;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.update(
        {breakfast : breakFast},
        {$set:{rating: raTings}
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});




/* GET home page. */
router.get('/removeuser', function(req, res, next) {
  res.render('removeuser', { title: 'Express' });
});


/*REMOVE removes an entry */
router.post('/removeuser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var breakFast = req.body.breakfast;
    //var raTings = req.body.rating;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.remove({
        breakfast: breakFast}
	, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});








module.exports = router;
