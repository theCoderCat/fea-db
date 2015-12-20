'use strict';

import React from 'react';

(function(window) {
	class List extends React.Component {
		constructor() {
			super();
		}
		render() {
			var createCharacterRow = (c) => {
				return (
					<tr key={c.nameEN}>
						<td><a href={"/#character/" + c.nameEN}>{c.nameEN}</a></td>
						<td>{c.baseClasses.map(createClassLink, this)}</td>
					</tr>
				);
			};

			var createClassLink = (cl) => {
				return (
					<a key={cl} href={'/#class/' + cl}>{cl}<br/></a>
				);
			};

			// loop through characters object keys and create character row foreach object
			return (
				<table className="mui-table mui-table--bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Classes</th>
						</tr>
					</thead>
					<tbody>
						{this.props.characters.map(createCharacterRow, this)}
					</tbody>
				</table>
			);
		}
	}

	module.exports = List;
})(window);
