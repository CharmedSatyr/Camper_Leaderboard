var React = require('react');

var Header = React.createClass(
	{
		render: function () {
			return (
        <div className='header'>
          <a href='https://freeCodeCamp.com'>freeCodeCamp<i className='fa fa-free-code-camp'/></a>
					<span className='bl'>&#32;Leaderboard</span>
        </div>
      );
		}
	}
);

module.exports = Header;
