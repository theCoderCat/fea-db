var express = require('express');
var router = express.Router();
var character = require('../logics/character');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(character.get(req.name));
});

module.exports = router;
