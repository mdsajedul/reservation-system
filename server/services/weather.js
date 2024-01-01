const axios = require('axios');
const { openWeatherBaseUrl, openWeatherGeoUrl, openWeatherAPIKey } = require('../config/config');

const openWeatherAPIs = axios.create({
    baseUrl: openWeatherBaseUrl,
    timeout: 1000,
})

const getLocationLatLonByCity = async (cityName) => {
    try {
        const response = await axios.get(`${openWeatherGeoUrl}/direct?q=${cityName}&limit=5&appid=${openWeatherAPIKey}`);
        return response?.data[0];
    } catch (error) {
        console.error('Error fetching location:', error.message);
        throw error; // Propagate the error to the caller
    }
};

const getWeatherInfo = async (cityName)=>{
    try {
        let latLonInfo = await getLocationLatLonByCity(cityName);
        let weatherInfo = openWeatherAPIs.get(`/onecall?lat=${latLonInfo?.lat}&lon=${latLonInfo?.lon}&appid=${openWeatherAPIKey}`);
        console.log('Weather info', hotel?.location?.city)
        
    } catch (error) {
        console.error('Error fetching location:', error.message);
        throw error; // Propagate the error to the caller
    }
}


module.exports = {
    getLocationLatLonByCity, getWeatherInfo
}