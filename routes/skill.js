var express = require('express');
var router = express.Router();
var skill = require('../logics/skill');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send(skill.get());
});

module.exports = router;