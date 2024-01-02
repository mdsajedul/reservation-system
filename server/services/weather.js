const axios = require('axios');
const { openWeatherBaseUrl, openWeatherGeoUrl, openWeatherAPIKey } = require('../config/config');

const openWeatherAPIs = axios.create({
    baseURL: openWeatherBaseUrl,
    timeout: 1000,
})

const getLocationLatLonByCity = async (cityName) => {
    try {
        const response = await axios.get(`${openWeatherGeoUrl}/direct?q=${cityName}&limit=5&appid=${openWeatherAPIKey}`);
        return response?.data[0];
    } catch (error) {
        console.error('Error fetching location:', error.message);
        throw error; 
    }
};

const getWeatherInfo = async (cityName)=>{
    try {
        let latLonInfo = await getLocationLatLonByCity(cityName);
        let weatherInfo =await openWeatherAPIs.get(`weather?lat=${latLonInfo?.lat}&lon=${latLonInfo?.lon}&appid=${openWeatherAPIKey}`);
        return weatherInfo?.data;
    } catch (error) {
        console.error('Error fetching location:', error.message);
        throw error; 
    }
}


module.exports = {
    getLocationLatLonByCity, getWeatherInfo
}