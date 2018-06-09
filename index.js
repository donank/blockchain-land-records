
var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

var app = express();

app.use(cors());

app.use(require('method-override')());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
  });