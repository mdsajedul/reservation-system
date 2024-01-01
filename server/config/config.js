require('dotenv').config('../.env')

module.exports = {
    PORT: process.env.PORT ,
    dbURI: process.env.MONGODB_URI,
    JWTSecret: process.env.JWT_SECRET,
    bcryptSalt: process.env.BCRYPT_SALT,
    serverUrl: `http://${process.env.SERVER_HOST}:${process.env.PORT}`,
    openWeatherAPIKey: process.env.OPENWEATHER_KEY,
    openWeatherBaseUrl: process.env.OPENWEATHER_BASE_URL,
    openWeatherGeoUrl: process.env.OPENWEATHER_GEO_URL
}
