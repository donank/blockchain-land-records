"use strict";

var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    contract = require('../models/contract'),
    web3 = require('web3'),
    fs = require('fs');

var web3 = new web3();
var ndoeUrl = 'http://localhost:8545';
web3.setProvider(new web3.providers.HttpProvider(ndoeUrl));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

exports.publish_record = function (req, res) {
    var hash = req.body.hash;
    var address = req.body.address;
    
    if(!web3.isConnected()){
        throw new Error("Unable to connect to ethereum node.");
    }else{
        console.log("Connected to node at " + ndoeUrl);
        let coinbase = web3.eth.coinbase;
        console.log("Coinbase:" + coinbase);
        let balance = web3.eth.getBalance(coinbase);
        console.log("Balance:" + web3.fromWei(balance, 'ether') + " ETH");
        let accounts = web3.eth.accounts;
        console.log(accounts);
        
        if (web3.personal.unlockAccount(address, 'user')) {
            console.log(`${address} unlocked`);
        }else{
            console.log("Address unlock failed");
            res.send(JSON.stringify("Invalid Address"))
        }
    }

    let source = fs.readFileSync('./ethereum-contract/record.sol', 'utf8');

    let compiledContract = solc.compile(source);
    console.log("Contract Compiled");

    for (let contractName in compiledContract.contracts) {
        
        var bytecode = compiledContract.contracts[contractName].bytecode;
        var abi = JSON.parse(compiledContract.contracts[contractName].interface);
    }

    let gasEstimate = web3.eth.estimateGas({data: '0x' + bytecode});

    let FinalContract = web3.eth.contract(abi);

    let deployedContract = FinalContract.new( {
        from: address,
        data: '0x'+ bytecode,
        gas: gasEstimate + 50000
    }, function (err, finalContract) {
        if (!err) {
            if (!finalContract.address) {
                console.log("Tx Hash : " + finalContract.transactionHash);
                } else {
                console.log("Contract Address : " + finalContract.address); 
                res.send(JSON.stringify("Contract deployed succesfully at : " + finalContract.address))
            }
        } else {
            console.log(err);
            res.send(JSON.stringify("Error while deploying contract."))
        }
    });

};
