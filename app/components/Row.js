var React = require('react');

var Row = React.createClass(
	{
  	render: function () {
			var bg;
			if (this.props.id % 2 === 0) {
				bg = 'dark';
			} else {
				bg = 'light';
			}

			return (
        	<tr className={bg}>
          	<td>{this.props.id}</td>
          	<td>
            	<a href={'https://freecodecamp.com/' + this.props.data.username} target='_blank'>
              	<img src={this.props.data.img}/>
            	</a>
          	</td>
						<td>
							<a href={'https://freecodecamp.com/' + this.props.data.username} target='_blank'>
								{this.props.data.username}
							</a>
						</td>
          	<td>
							{this.props.data.recent}
						</td>
          	<td>
							{this.props.data.alltime}
						</td>
        	</tr>
    	);
  	}
	}
);

module.exports = Row;
