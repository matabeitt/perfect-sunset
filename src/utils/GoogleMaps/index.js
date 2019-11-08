import gmaps from '@google/maps';

const client = gmaps.createClient({
    key: process.env.REACT_APP_GEOCODE_KEY,
    Promise: Promise
});

/**
 * Returns a Promise of the formatted address 
 * and latitute and longitude position of the 
 * location according to Google Maps.
 * @param {String} locale 
 * @param {String} country 
 * @returns {Promise<Object>}
 */
export const getLocationCoordinates = (locale, country) => {
    return client.geocode({
        address: locale + "," + country,
    }).asPromise()
        .then(res => {
            res = res.json.results[0];
            return {
                address: res.formatted_address,
                location: res.geometry.location
            }
        })
        .catch(err => (err));
}