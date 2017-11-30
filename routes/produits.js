'use strict';
var express = require('express');
var router = express.Router();

/* unConnected  routes config */
/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { title: 'Inventaire' });
});

router.get('/articles', function (req, res) {
    var objectToReturn = { produits: ["orange", "purple", "ad"] }; 
    console.log(objectToReturn.produits);
    res.render('index', objectToReturn);

});

module.exports = router;
