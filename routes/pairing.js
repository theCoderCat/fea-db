var express = require('express');
var router = express.Router();
var CharacterAPI = require('../logics/character');
var Pairing = require('../logics/pairing');

/* GET character or characters listing. */
router.get('/:name1-:name2', (req, res, next) => {
	var name1 = req.params.name1;
	var name2 = req.params.name2;
    var p = new Pairing([name1, name2]);
    var children = p.getChildren();
    res.send(children);
});

module.exports = router;
