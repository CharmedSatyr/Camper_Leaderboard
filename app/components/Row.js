var React = require('react');

var Row = React.createClass({
    render: function() {
        var bg;
        if (this.props.id % 2 === 0) {
            bg = 'dark';
        } else {
            bg = 'light';
        }

        var insecureRegex = /http:/gi;
        var altImg = 'https://github.com/identicons/jasonlong.png';

        function secure(site, sub) {
            if ((site).match(insecureRegex)) {
                console.log('Insecure site found and fixed');
                return sub;
            } else {
                return site;
            }
        }

        return (
            <tr className={bg}>
                <td>
                    <a href={'https://freecodecamp.com/' + this.props.data.username} target='_blank'>
                        {this.props.id}
                    </a>
                </td>
                <td>
                    <a href={'https://freecodecamp.com/' + this.props.data.username} target='_blank'>
                        <img src={secure(this.props.data.img, altImg)}/> {this.props.data.username}
                    </a>
                </td>
                <td>
                    <a href={'https://freecodecamp.com/' + this.props.data.username} target='_blank'>
                        {this.props.data.recent}
                    </a>
                </td>
                <td>
                    <a href={'https://freecodecamp.com/' + this.props.data.username} target='_blank'>
                        {this.props.data.alltime}
                    </a>
                </td>
            </tr>
        );
    }
});

module.exports = Row;
