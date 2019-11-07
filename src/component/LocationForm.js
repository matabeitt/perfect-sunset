import React from "react";

class LocationForm extends React.Component {

	render () {
		return (
			<div>
				<form className="text-center my-3"
				onSubmit={this.props.callback}>
					<h3 className="text-dark">Enter your location</h3>
					<div className="form-group">
						<input className="form-control" type="text" name="locale" placeholder="City/Town"/>
					</div>
					<div className="form-group">
						<input className="form-control" type="text" name="country" placeholder="Country"/>
					</div>
					<button className="btn btn-outline-primary btn-lg btn-block btn-weather">GET</button>
				</form>
			</div>
		);
	}
}

export default LocationForm;