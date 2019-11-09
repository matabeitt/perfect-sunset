import axios from 'axios';
import {queryWeatherAPI} from './DarkSky';
import {getLocationCoordinates} from './GoogleMaps';

import {defaultContext, testData, testContext} from '../mocks/WeatherData';

/**
 * Returns the time and weather data for the given 
 * locale and country combination by calling the 
 * API request function.
 * @param {String} locale 
 * @param {String} country
 * @returns {[String, Object]}
 */
export const fetchWeatherDataFromAPI = async (locale, country) => {
    return await parseWeatherData(await getWeatherFor(locale, country));
}

/**
 * Returns the Open Weather API response to the 
 * locale and country provided.
 * @param {String} locale 
 * @param {String} country 
 */
export const getWeatherFor = async (locale, country) => {
    const uri = process.env.REACT_APP_WEATHER_URL + locale + ',' + country + process.env.REACT_APP_WEATHER_API_KEY;
    return axios.get(uri)
        .then(res => {
            console.log(res);
            return res.data
        })
        .catch(err => (err.response));
}

/**
 * Returns a parsed object of pertinent weather 
 * data from the Open Weather API response.
 * @param {Object} data 
 */
export const parseWeatherData = (data) => ([data.sys.sunset, {
    clouds: data.clouds.all,
    wind: data.wind.speed,
    humidity: data.main.humidity,
    locale: data.name,
    country: data.sys.country
}]);

/**
 * Returns the context of the sunset given by the 
 * data from the parsed Open Weather API response.
 * @param {Object} data
 */
export const getWeatherContext = ({data}) => {
    if (!data) return defaultContext;
    return {
        time: data.time,
        title: 'Unknown',
        subtitle: 'None',
        rating: getWeatherIndex(data),
    }
};

/**
 * Returns an integer between 1 and 5 determined 
 * by the weather data provided.
 * @param {Object} data 
 */
export const getWeatherIndex = (data) => {
    if (!data) return 0;
    const humidity = data.humidity;
    const beaufort = Math.pow(((data.wind) / 0.836), 2/3);
    const clouds = Math.abs((data.clouds - 50) / 10);
    return 0;
}

/**
 * Returns the longitude and latitude for the 
 * supplied address using the Googe Maps 
 * Geocoding API.
 * @param {String} locale
 * @param {String} country 
 */
export const getLocation = async (locale, country) => {
    return await getLocationCoordinates(locale, country);
}

export const computeWeatherContext = (time, weather) => {
    if (time === null || weather === null) return testContext;
    else return testContext;
}