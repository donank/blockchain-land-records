"use strict";

var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    ipfsAPI = require('ipfs-api'),
    Record = require('../models/record'),
    
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/save', function(req, res){
    Record.create({
        old_owner_name : req.body.old_owner_name,
        old_owner_unique_id : req.body.old_owner_unique_id,
        current_owner_name : req.body.current_owner_name,
        current_owner_unique_id : req.body.current_owner_unique_id,
        nonce : req.body.nonce,
        sell_price : req.body.sell_price,
        total_area : req.body.total_area
    },function(err, record){
        if (err) return res.status(500).send("There was a problem adding the information to the database.");

        ipfs.add(user)

        res.status(200).send("hash");
    })
});

router.post('/publish', function(req, res){
    
});

module.exports = router;