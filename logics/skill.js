'use strict';
var SkillsDB = require('../data/skills');
// var ClassAPI = require('./class');

class Skill {
    // take class name then return class object
    get(_name) {
        if (_name) return SkillsDB[_name];
    }
}

module.exports = Skill;