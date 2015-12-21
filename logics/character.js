var characters = require('../data/characters.js');
var skillAPI = require('./skill.js');
var classAPI = require('./class.js');

var character = {
	get: (name) => {
		if (typeof name !== undefined && name) {
			return characters[name];
		} else {
			// return an array of charactes
			var dataArray = [];
			for(var id in characters) {
			    dataArray.push(characters[id]);
			}
			return dataArray;
		}
	},
    
    getClassSet: (name) => {
        if (typeof name !== undefined && name) {
            var baseClasses = this.get(name).baseClasses;
            var classSet = classAPI.getClassSet(baseClasses);
            return classSet;
        }
    },
    
    getSkillSet: (name) => {
        if (typeof name !== undefined && name) {
            var baseClasses = this.get(name).baseClasses;
            var classSet = this.getClassSet(baseClasses); 
            skillSet = skillAPI.getSkillSet(classSet);
        }
    }
};

module.exports = character;
