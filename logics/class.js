'use strict';
var ClassesDB = require('../data/classes');
var SkillAPI = require('./skill');

class Class {
    // take class name then return class object
    get(_name, _withPromote, _withSkill) {
        var cl = null;
        if (_name) cl = ClassesDB[_name];
        if (_withPromote) {
            cl.promoteTo = this.getPromoteClasses(cl);
        }
        if (_withSkill) {
            var Skill = new SkillAPI();
            cl.skills = cl.skills.map((_sk) => {
                return Skill.get(_sk);
            });
        }
        return cl;
    }

    getPromoteClasses(_base) {
        var promoteClasses = null;
        if (_base && _base.promoteTo) {
            var promoteNames = _base.promoteTo;
            promoteClasses = promoteNames.map((x) => {
                return this.get(x);
            });
        }
        
        // return null by default
        return promoteClasses;
    }

    // param:
    // Array baseClasses = ['name1', 'name2', ['name', ...]]
    getClassSet(_baseClassNameArr) {
        var classes = [];
        // base classes must be passed as array
        if (_baseClassNameArr) {
            // create baseClasses array base on array of names
            var baseClasses = _baseClassNameArr.map(_cl => this.get(_cl));

            // transform promoteTo array form array of names into array of Objects
            var baseClassesWithPromoted = baseClasses.map(base => this.getPromoteClasses(base));
            classes = baseClassesWithPromoted;
        }

        // return array
        return classes;
    }
}

module.exports = Class;