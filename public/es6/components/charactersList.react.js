'use strict';

import React from 'react';
// import Characters from '../../../logics/character';
// import router from 'react-router';
// import flux from 'flux';

(function(window) {
	class List extends React.Component {
		getInitialState() {
			return {
				characters: [],
			};
		}

		componentWillMount() {
			this.setState({characters: $.get('/character/')});
		}

		render() {
			var createCharacterRow = (char) => {
				return (
					<tr key={char.nameEn}>

					</tr>
				);
			};
			return (
				<div className="">
					<h1>Character List</h1>
					<table className="mui-table">
						<thead>
							<tr>
								<td>Name</td>
								<td>Classes</td>
							</tr>
						</thead>
						<tbody>
							{this.state.characters.map(createCharacterRow, this)}
						</tbody>
					</table>
				</div>
			);
		}
	}

	module.exports = List;
})(window);
