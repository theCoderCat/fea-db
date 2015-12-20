'use strict';

import React from 'react';

(function(window) {
	class Header extends React.Component {
		render() {
			return (
				<header className="mui-appbar mui--z1">
			        <div className="mui-container">
			            <table width="100%">
			                <tbody>
								<tr className="mui--appbar-height">
				                    <td className="mui--text-title">FEA.io</td>
				                    <td align="right">
				                        <ul className="mui-list--inline mui--text-body2">
				                            <li><a href="#character">Characters</a></li>
				                            <li><a href="#classes">Classes</a></li>
											<li><a href="#skills">Skills</a></li>
				                        </ul>
				                    </td>
				                </tr>
							</tbody>
			            </table>
			        </div>
			    </header>
			);
		}
	}

	module.exports = Header;
})(window);
