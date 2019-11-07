import React from "react";

class Title extends React.Component {
	render () {
		return (
			<div className="text-shadow">
				
				<p>{this.props.subtitle}</p>
			</div>
		)
	}
}

export default Title;