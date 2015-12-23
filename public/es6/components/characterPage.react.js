'use strict';

import React from 'react';
import CharacterList from './characterList.react';
import CharacterAPI from '../../../logics/character';

(function(window) {
	class Page extends React.Component {
		constructor(props) {
			super(props);
			this.state = {};
		}

		componentWillMount() {
			var Character = new CharacterAPI();
			this.setState({characters: Character.get()});
		}
		render() {
			return (
				<div>
					<h1>Character List</h1>
					<div className="mui-container">
						<CharacterList characters={this.state.characters} />
					</div>
				</div>
			);
		}
	}

	module.exports = Page;
})(window);
