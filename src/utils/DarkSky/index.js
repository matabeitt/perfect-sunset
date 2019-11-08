import axios from 'axios';

export const getWeatherData = async ({ lat, lng }) => {
    const uri = process.env.REACT_APP_DARK_SKY + process.env.REACT_APP_DARK_SKY_KEY
    return await axios.get(uri + "/" + lat + "," + lng)
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => (err.response));
};
