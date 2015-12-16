var express = require('express');
var router = express.Router();
var character = require('../logics/character');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('characters', {data: character.get()});
});

module.exports = router;
