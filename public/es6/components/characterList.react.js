'use strict';

import React from 'react';
import ClassAPI from "../../../logics/class";

class List extends React.Component {
    constructor() {
        super();
    }
    render() {
        var createCharacterCard = (c) => {
            console.log(c);
            return (
                <div className="mui-col-md-2" key={c.id}>
                    <div className="mui-panel mui--text-center">
                        <img src={"/images/avatar/" + c.id + ".png"} />
                        <div className="">
                            <a href={"/api/character/" + c.id}><h3>{c.nameEN}</h3></a>
                        </div>
                    </div>
                </div>
            );
        };

        var createClassLink = (cl) => {
            var c = new ClassAPI();
            var _class = c.get(cl);
            return (
                <div>
                    <a key={_class.id} href={'/#class/' + _class.id}>{_class.name}</a>
                </div>
            );
        };

        // loop through characters object keys and create character row foreach object
        return (
            <div className="mui-row">
                {this.props.characters.map(createCharacterCard, this)}
            </div>
        );
    }
}

module.exports = List;
