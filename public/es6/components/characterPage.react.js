'use strict';

import React from 'react';
import CharacterList from './characterList.react';
import CharactersAPI from '../../../logics/character';

(function(window) {
	class Page extends React.Component {
		constructor(props) {
			super(props);
			this.state = {};
		}

		componentWillMount() {
			this.setState({characters: CharactersAPI.get()});
		}
		render() {
			console.log(this.state.characters);
			return (
				<div>
					<h1>Character List</h1>
					<CharacterList characters={this.state.characters} />
				</div>
			);
		}
	}

	module.exports = Page;
})(window);
