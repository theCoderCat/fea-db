var express = require('express');
var router = express.Router();
var ClassAPI = require('../logics/class');

/* GET users listing. */
router.get('/', (req, res, next) => {
    var _class = new ClassAPI();
    res.send(_class.get());
});

router.get('/:name', (req, res, next) => {
    var _class = new ClassAPI();
    // get class with its promote classes
    res.send(_class.get(req.params.name, true, true));
});

module.exports = router;
