var React = require('react');
var TableRows = require('./TableRows');
var Row = require('./Row');

var App = React.createClass({
    getInitialState: function() {
        return {recent: [], alltime: [], display: 'recent'}
    },
    componentDidMount: function() {
        var xhrR = new XMLHttpRequest();
        var recent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

        xhrR.onreadystatechange = function() {
            if (xhrR.readyState === 4 && xhrR.status === 200) {
                var dataR = JSON.parse(xhrR.responseText);
                this.setState({recent: dataR});
            }
        }.bind(this);
        xhrR.open('GET', recent, true);
        xhrR.send(null);

        var xhrA = new XMLHttpRequest();
        var alltime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

        xhrA.onreadystatechange = function() {
            if (xhrA.readyState === 4 && xhrA.status === 200) {
                var dataA = JSON.parse(xhrA.responseText);
                this.setState({alltime: dataA});
            }
        }.bind(this);
        xhrA.open('GET', alltime, true);
        xhrA.send(null);

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
                                <button onClick={this.showRecent}>
                                    <i className={this.state.display == 'recent'
                                        ? ''
                                        : 'fa fa-sort-amount-desc'}></i>&#32;Recent
                                </button>
                            </th>
                            <th>
                                <button onClick={this.showAllTime}>
                                    <i className={this.state.display == 'alltime'
                                        ? ''
                                        : 'fa fa-sort-amount-desc'}></i>&#32;All Time
                                </button>
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
