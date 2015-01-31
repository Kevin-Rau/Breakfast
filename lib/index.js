var express     = require('express'),
    doStuff      = require('./doStuff'),
    bodyParser  = require('body-parser'),
    http        = require('http');

    var app = express();
    app.set('port', process.env.PORT || 3000);
    app.set('env', process.env.NODE_ENV || 'development');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    routes(app);

    var server = http.createServer(app);

    server.listen(app.get('port'), function(){
      console.log("Listening on port " + app.get('port') + " in "+ app.get('env') + " mode");
    });

module.exports = app;
