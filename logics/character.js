var characters = require('../data/characters.js');

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
	}
};

module.exports = character;
