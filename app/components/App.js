'use strict';

const React = require('react');

const recent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const alltime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

const App = React.createClass({

    getInitialState: function() {
        return {users: [], show: 'recent'}
    },
    pullInfo: function(url, show) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                this.setState({users: data, show: show});
            }
        }.bind(this);
        xhr.open('GET', url, true);
        xhr.send(null);
    },
    showRecent: function() {
        this.pullInfo(recent, 'recent');
    },
    showAllTime: function() {
        this.pullInfo(alltime, 'alltime');
    },
    componentWillMount: function() {
        this.pullInfo(recent, 'recent');
    },
    render: function() {
        return (
            <div className='main'>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Camper</th>
                            <th>
                                <button onClick={this.showRecent}>
                                    <i className={this.state.show == 'recent'
                                        ? 'fa fa-check'
                                        : 'fa fa-sort-amount-desc'}></i>&#32;Recent Points
                                </button>
                            </th>
                            <th>
                                <button onClick={this.showAllTime}>
                                    <i className={this.state.show == 'alltime'
                                        ? 'fa fa-check'
                                        : 'fa fa-sort-amount-desc'}></i>&#32;Total Score
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(function(user, index) {

                            const insecureRegex = /http:/gi;
                            const altImg = 'https://github.com/identicons/jasonlong.png';

                            function secure(site, sub) {
                                if ((site).match(insecureRegex)) {
                                    console.log('Insecure site found and fixed');
                                    return sub;
                                } else {
                                    return site;
                                }
                            }
                            return (
                                <tr className={(index % 2 === 0)
                                    ? 'dark'
                                    : 'light'}>
                                    <td>
                                        <a href={'https://freecodecamp.com/' + user.username}>
                                            {index + 1}
                                        </a>
                                    </td>
                                    <td>
                                        <a href={'https://freecodecamp.com/' + user.username}>
                                            <img src={secure(user.img, altImg)}/> {user.username}
                                        </a>
                                    </td>
                                    <td>
                                        <a href={'https://freecodecamp.com/' + user.username}>
                                            {user.recent}
                                        </a>
                                    </td>
                                    <td>
                                        <a href={'https://freecodecamp.com/' + user.username}>
                                            {user.alltime}
                                        </a>
                                    </td>
                                </tr>
                            );
                        })
}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = App;
