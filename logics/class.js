'use strict';
var skillsDB = require('../data/skills');
var classesDB = require('../data/classes');

class Class {
	constructor() {

	}
	
    // take class name then return class object
	get(name) {
		if (name !== undefined && name) return classesDB[name];
	}

    // param:
    // Array bc -> baseClasses ['name1', 'name2', ['name', ...]]
	getClassSet(bc) {
		var classes = [];
        // base classes must be passed as array
		if (bc) {
            // get all promoted class for ONE base class
            // params is the class object itself
			var getPromotedClasses = (base) => {
				let classNames = base.promoteTo;

                // in case promoteTo hold value of null
				if (classNames) {
                    base.promoteTo = classNames.map(cl => this.get(cl));
                }
                return base;
			};

            // create baseClasses array base on array of names
            var baseClasses = bc.map(cl => this.get(cl));

            // transform promoteTo array form array of names into array of Objects
			var baseClassesWithPromoted = baseClasses.map(base => getPromotedClasses(base));
			classes = baseClassesWithPromoted;
		}

        // return array
        return classes;
	}
}

module.exports = Class;
