"use strict";

var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

exports.index = function(req, res){
    res.send('Home Page')
};
