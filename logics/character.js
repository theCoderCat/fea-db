'use strict';
var Characters = require('../data/characters.js');
var skillAPI = require('./skill.js');
var ClassAPI = require('./class.js');

class Character {
	get(name) {
		if (typeof name !== 'undefined' && name) {
			return Characters[name];
		} else {
			// return an array of charactes
			var dataArray = [];
			for(var id in Characters) {
			    dataArray.push(Characters[id]);
			}
			return dataArray;
		}
	}
    
    getClassSet(name) {
        if (typeof name !== 'undefined' && name) {
            var Class = new ClassAPI();
            var baseClasses = this.get(name).baseClasses;
            var classSet = Class.getClassSet(baseClasses);
            return classSet;
        }
    }
    
    getSkillSet(name) {
        if (typeof name !== 'undefined' && name) {
            var baseClasses = this.get(name).baseClasses;
            var classSet = this.getClassSet(baseClasses); 
            return ClassAPI.getSkillSet(classSet);
        }
    }
}

module.exports = Character;
