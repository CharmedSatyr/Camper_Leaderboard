var React = require('react');
var Row = require('./Row');

var TableRows = React.createClass({
  render: function() {

    var rows = this.props.data.map(function (row, index) {
       return <Row key={index} id={index + 1} data={row} />;
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
});

module.exports = TableRows;
