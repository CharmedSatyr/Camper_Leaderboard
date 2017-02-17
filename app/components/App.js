var React = require('react');

var App = React.createClass(
	{
		render: function () {
			return (
				<div className='app'>Camper Leaderboard Guts Go Here
					<table>
						<tr>
							<th>Leaderboard</th>
						</tr>
						<tr>
							<th>Name</th>
							<th>Daily</th>
							<th>All Time</th>
						</tr>
					</table>
				</div>
			);
		}
	}
);

module.exports = App;
