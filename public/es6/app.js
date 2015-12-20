import React from 'react';
import ReactDOM from 'react-dom';
import CharactersList from './components/charactersList.react';
import SkillsList from './components/skillsList.react';
import Header from './components/header.react';

(function(window) {
	'use strict';
	class App extends React.Component {
		render() {
			let Child;

			switch (this.props.route) {
				case 'skills':
					Child = SkillsList;
					break;
				case 'classes':
				case 'characters':
				default:
					Child = CharactersList;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);
		}
	};

	function render() {
		var route = window.location.hash.substr(1);
		ReactDOM.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();
})(window);
