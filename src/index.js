var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./components/Header');
var App = require('./components/App');
var Footer = require('./components/Footer');

var Display = React.createClass({
	render: function () {
			return (
			<div>
			<Header />
			<App />
			<Footer />
			</div>
		);
	}
});

ReactDOM.render(
	<Display />,
	document.getElementById('app')
);
