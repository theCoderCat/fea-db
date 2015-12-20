var express = require('express');
var router = express.Router();
var character = require('../logics/character');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send(character.get());
});

module.exports = router;
