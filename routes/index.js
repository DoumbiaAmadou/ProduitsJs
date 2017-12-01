'use strict';
var express = require('express');
var router = express.Router();

/* unConnected  routes config */
/* GET home page. */
let objectToReturn = 
        {
            produits: [{ titre: "Pommes"},
                { titre: "Bananes" , qte : 4 },
                { titre: "Cerises", qte: 4 },
                { titre: "Citron", qte: 4 },
                { titre: "BPM", qte: 4},
                { titre: "ALcools", qte: 4},
                { titre: "Chaussures", qte: 4 },
                { titre: "T-shirt", qte: 4 },
                { titre: "Boxers", qte: 4},
                { titre: "Slips", qte: 4},
                { titre: "Sweats", qte: 4}

            ]
        };
router.get('/', function (req, res) {
    res.render('index', { title: 'Inventaire' });
});
router.get('/home', function (req, res) {
    res.render('index', { title: 'Inventaire' });
});

router.get('/articles', function (req, res) {
    

    console.log(objectToReturn.produits); 
    res.render('produits', objectToReturn);

});

module.exports = router;
