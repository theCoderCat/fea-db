'use strict';
// var Characters = require('../data/characters.js');
var CharacterAPI = require('./character.js');
var skillAPI = require('./skill.js');
var ClassAPI = require('./class.js');

class Pairing {
    constructor(_parent) {
        // init default values if no parameter has been is passed
        this.parent = [];
        this.children = [];
        this.father = null;
        this.mother = null;
        if (_parent) {
            // init parent
            this.setParent(_parent).setChildren();
        }
    }

    // parent is array
    // order of father and mother is not nessessary
    // only arrays of 2 are accepted
    setChildren() {
        var api = new CharacterAPI();
        if (this.checkSupport()) {
            this.parent.forEach((_p) => {
                // if this parent has children, go get them then concatenate with
                // current children array
                var _c = _p.children.map(x => api.get(x));
                this.children = this.children.concat(_c);
            });
        }
        console.log("children: ");
        console.log(this.children);
        return this;
    }

    setParent(_parent) {
        var api = new CharacterAPI();
        // get the actual parent objects
        this.parent = _parent.map(_char => api.get(_char));

        // check if their gender are opposite then
        // set father and mother base on their gender
        if (this.checkGender()) {
            this.parent.forEach((_p) => {
                // if this character is a male, make him the father
                if (_p.gender === 'male') {
                    if (!this.father) {
                        this.setFather(_p);
                    }
                } else { // make her the mother
                    if (!this.mother) {
                        this.setMother(_p);
                    }
                }
            });
        }
        console.log("father: ");
        console.log(this.father);
        console.log("mother: ");
        console.log(this.mother);
        return this;
    }

    setFather(_f) {
        this.father = _f;
        this.onParentChange();
        return this;
    }

    setMother(_m) {
        this.mother = _m;
        this.onParentChange();
        return this;
    }

    getChildren() {
        return this.children;
    }

    getParent() {
        return {
            father: this.father,
            mother: this.mother
        };
    }

    // check their gender
    checkGender() {
        var isOppositeGender =  this.parent[0].gender !== this.parent[1].gender;
        console.log('opposite gender? ' + isOppositeGender);
        if (isOppositeGender) {
            // continue
            return true;
        } else {
            return false;
        }
    };

    // determine whether they has each other in s support array
    checkSupport() {
        var isSupportS =  this.father.possibleSupport.s.indexOf(this.mother.id) !== -1 && this.mother.possibleSupport.s.indexOf(this.father.id) !== -1;
        
        console.log('support rank S? ' + isSupportS);
        return isSupportS;
    }
    
    onParentChange() {
        this.setChildren();
    }
}

module.exports = Pairing;
