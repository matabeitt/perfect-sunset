import React from "react";
// import Title from "./component/Title";
import LocationForm from "./component/LocationForm";
// import ErrorView from "./component/ErrorView";
import Clock from "./component/Clock";
import { wrapperFirebase } from './utils/Firebase/context';
// import * as secret from './secret';

// Refactored components...
import WeatherChart from "./component/WeatherChart";
import SunsetView from "./component/SunsetView";

// Mock data for new components...
// import { testData } from './mocks/WeatherData';

// Utiltiy functions
import {
	getWeatherFor,
	parseWeatherData,
	getWeatherContext,
	getLocation,
	fetchWeatherDataFromAPI,
	computeWeatherContext,
} from './utils';

const weather = {
	bad: require('./assets/media/sunset_bad.jpg'),
	okay: require('./assets/media/sunset_okay.jpg'),
	good: require('./assets/media/sunset_good.jpg'),
	great: require('./assets/media/sunset_great.jpg'),
	perfect: require('./assets/media/sunset_perfect.jpg')
}

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			dataView: undefined,
			sunsetContext: undefined,
			sunsetData: undefined,
			sunsetView: undefined,
			sunsetTime: undefined,
		}
	}

	render = () => {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="container bg-dark">
						<Clock />
					</div>
					<div className="container bg-primary text-white shadow"
						style={this.state.sunsetView}>
						<div className="row">
							<SunsetView {...this.state.sunsetContext} />
							{/* <div
								className="col-6 title-container my-auto text-center">
								<div className="mx-0">
									<Title
										title={this.state.sunsetTime}
									/>
									<Title
										title={this.state.title}
										subtitle={this.state.message} />
								</div>
							</div> */}
							<div className="col-6 py-2 form-container bg-light">
								<LocationForm
									callback={this.fetchWeather}
								/>
								{this.state.dataView}
								{
									this.state.sunsetData ?
										<WeatherChart {...this.state.sunsetData} />
										:
										null
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	fetchWeather = async (evt) => {
		evt.preventDefault();

		let newContext = {};
		let newData = {};

		const locale = evt.target.elements.locale.value;
		const country = evt.target.elements.country.value;

		if (locale && country) {
			// Error correct the address and location points.
			const { address, location } = await getLocation(locale, country);
			// Fetch the time of sunset and weather for query.
			const { time, weather } = await fetchWeatherDataFromAPI(locale, country);
			// Compute the quality information for weather data.
			const { title, desc, rating} = computeWeatherContext(time, weather);

			// Set the new Context to be set in state. (Context)
			newContext['time'] = time;
			newContext['title'] = title;
			newContext['description'] = desc;
			newContext['rating'] = rating

			// Set the new Data to be set in the state. (Chart)
			newData['weather'] = weather;

			let context = getWeatherContext();

			this.setState({
				sunsetData: newData,
				sunsetContext: newContext,
			});
		}
	}
};

export default wrapperFirebase(App);
