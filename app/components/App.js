var React = require('react');
var TableRows = require('./TableRows');
var Row = require('./Row');

var App = React.createClass({
    getInitialState: function() {
        return {recent: [], alltime: [], display: 'recent'}
    },
    componentDidMount: function() {
        var recent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
        $.get(recent, function(data) {
            this.setState({recent: data});
        }.bind(this));

        var alltime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
        $.get(alltime, function(data) {
            this.setState({alltime: data});
        }.bind(this));
    },
    showRecent: function() {
        this.setState({display: 'recent'});
    },
    showAllTime: function() {
        this.setState({display: 'alltime'});
    },
    render: function() {
        return (
            <div className='main'>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>
                                <div onClick={this.showRecent}>
                                    <i className="fa fa-sort"></i>&#32;Recent
                                </div>
                            </th>
                            <th>
                                <div onClick={this.showAllTime}>
                                    <i className="fa fa-sort"></i>&#32;All Time
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <TableRows data={this.state[this.state.display]}/>
                </table>
            </div>
        );
    }
});

module.exports = App;
