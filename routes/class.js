var express = require('express');
var router = express.Router();
var clss = require('../logics/class');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send(clss.get(req.query.name));
});

router.get('/:name?', (req, res, next) => {
    res.send(clss.get(req.params.name));
});

module.exports = router;
