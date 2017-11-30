'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});
router.get('/connect', function (req, res) {
    res.send('session de connection');
});

module.exports = router;
