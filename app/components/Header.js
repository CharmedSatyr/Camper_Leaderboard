var React = require('react');

var Header = React.createClass(
	{
		render: function () {
			return (
        <div className='header'>
          <a href='https://freeCodeCamp.com'>freeCodeCamp Leaderboard</a>
        </div>
      );
		}
	}
);

module.exports = Header;
