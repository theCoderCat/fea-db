'use strict';
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
            this.setParent(_parent);
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
                var _c = _p.children.map((x) => {
                    var child = api.get(x);
                    child.possibleClasses = this.getChildrenClass(child);
                    return child;
                });
                console.log(_c);
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
        this.parent = _parent.map((_char) => {
            let c = api.get(_char);
            return c || 'unknow character';
        });

        // check if their gender are opposite then
        // set father and mother base on their gender
        console.log('parent: ');
        console.log(this.parent);
        if (this.checkGender()) {
            console.log('gender test passed');
            this.parent.forEach((_p) => {
                switch (_p.gender) {
                    // if this character is a male, make him the father
                    case 'male':
                        console.log('got father');
                        if (!this.father) {
                            this.setFather(_p);
                        }
                        break;
                        // make her the mother
                    case 'female':
                        console.log('got mother');
                        if (!this.mother) {
                            this.setMother(_p);
                        }
                        break;
                    default:
                        break;
                }
            });
        }
        // console.log('parent array: ');
        // console.log(this.parent);
        // console.log("father: ");
        // console.log(this.father);
        // console.log("mother: ");
        // console.log(this.mother);
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
        var isOppositeGender = false;
        if (this.parent[0] && this.parent[1]) {
            isOppositeGender = this.parent[0].gender !== this.parent[1].gender;
        }
        console.log('opposite gender? ' + isOppositeGender);
        return isOppositeGender;
    };

    // determine whether they has each other in s support array
    checkSupport() {
        var isSupportS;
        // only do checking if both mother and father exist
        if (this.father && this.mother) {
            isSupportS = this.father.possibleSupport.s.indexOf(this.mother.id) !== -1 && this.mother.possibleSupport.s.indexOf(this.father.id) !== -1;
        } else {
            isSupportS = false;
        }

        console.log('support rank S? ' + isSupportS);
        return isSupportS;
    }

    // merge father and mother classes arrays, exclude those gender specific
    // classes which does not match child gender 
    getChildrenClass(_child) {
        var possibleClasses;
        var charAPI = new CharacterAPI();
        var classAPI = new ClassAPI();

        // first, get child's base classes
        // father and mother's base classes
        possibleClasses = _child.baseClasses;
        var fatherBaseClasses = this.father.baseClasses;
        var motherBaseClasses = this.mother.baseClasses;
        var fatherSpecialPassdown = this.father.specialPassdown;
        // possibleClasses = fatherClasses.concat(motherClasses);

        var _possiblePassdownClass = [];
        fatherBaseClasses.concat(motherBaseClasses).concat(fatherSpecialPassdown).forEach((_class) => {
            // if children's gender meet class's gender requirement, take it
            // otherwise, do nothing

            var _cl = classAPI.get(_class);

            // push class name to possiblePassdown only if it met both 3 
            // conditions
            // - child's gender match class gender
            // - child gender does have class as base class
            // - this class is not special class
            // (this seem confusing at first, but most special classes if 
            // possible to passed down to the child, it's probably one of the
            // child base classes)
            if (_cl && _child && _cl.gender.indexOf(_child.gender) !== -1 && possibleClasses.indexOf(_class) === -1 && !_cl.isSpecial) {
                _possiblePassdownClass.push(_class);
            }
        });

        // merge 2 array to get child's possible class names
        var _nameArr = possibleClasses.concat(_possiblePassdownClass);

        // transform in to array of class object
        return classAPI.getClassSet(_nameArr);
    }

    // merge all father and mother possible skills, exclude special skill which
    // cannot passed to normal child
    setChildrenSkill() {}

    onParentChange() {
        this.setChildren();
    }
}

module.exports = Pairing;