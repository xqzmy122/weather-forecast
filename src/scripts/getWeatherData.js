import Weather from "./Weather.js";

class WeatherData {
  static async getWeatherdata() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=36343b5c53d744a39cb132243252904&q=Minsk&aqi=no')
    console.log(response)
    console.log(response.headers)
    console.log(response.ok)
    const weatherData = await response.json()

    return new Weather(weatherData.location.region, weatherData.location.country, Math.floor(weatherData.current.temp_c), Math.floor(weatherData.current.feelslike_c), weatherData.current.wind_mph, weatherData.current.wind_mph,
      weatherData.current.humidity
    )
  }
}

export default WeatherData