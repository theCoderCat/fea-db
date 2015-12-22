var express = require('express');
var router = express.Router();
var CharacterAPI = require('../logics/character');

/* GET character or characters listing. */
router.get('/:name?', (req, res, next) => {
	name = req.params.name;
    var c = new CharacterAPI();
	if (name) {
		var Char = c.get(name);
		if (Char) {
			res.send(Char);
		} else {
			res.status(404).send('not found');
		}
	} else {
    	res.send(c.get());
	}
});

router.get('/:name/class', (req, res, next) => {
	name = req.params.name;
	if (name) {
		var c = new Character();
        var classes = c.getClassSet(name);
		if (classes) {
			res.send(classes);
			
		} else {
			res.status(404).send('not found');
		}
	}
});

module.exports = router;
