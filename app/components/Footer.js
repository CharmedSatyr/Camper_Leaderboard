var React = require('react');

var Footer = React.createClass(
	{
		render: function () {
			return (
        <div className='footer'>Made with <a href='https://facebook.github.io/react/'>React</a> by <a href='https://CharmedSatyr.com'>CharmedSatyr</a></div>
      );
		}
	}
);

module.exports = Footer;
