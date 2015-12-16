var characters = require('../data/characters.js');

var character = {
	get: (name) => {
		if (name) {
			return characters[name];
		} else {
			return characters;
		}
	}
};

module.exports = character;
