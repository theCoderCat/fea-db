var express = require('express');
var router = express.Router();
var SkillAPI = require('../logics/skill');

/* GET skills listing. */
router.get('/', (req, res, next) => {
    var Skill = new SkillAPI();
    res.send(Skill.get());
});

router.get('/:name', (req, res, next) => {
    var name = req.params.name;
    var Skill = new SkillAPI();
    res.send(Skill.get(name));
});

module.exports = router;