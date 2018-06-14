var express = require('express');
var router = express.Router();

var recordController = require('../controllers/record')

router.post('/saveRecord', recordController.save_record)

router.post('/publishIPFSHash', recordController.publish_record)

module.exports = router;