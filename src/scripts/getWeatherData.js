import Weather from "./Weather.js";

class WeatherData {
  static async getWeatherdata(city = 'Minsk') {
    let url = `https://api.weatherapi.com/v1/current.json?key=36343b5c53d744a39cb132243252904&q=${city}&aqi=no`
    city === '' ? url = `https://api.weatherapi.com/v1/current.json?key=36343b5c53d744a39cb132243252904&q=Minsk&aqi=no`: url = `https://api.weatherapi.com/v1/current.json?key=36343b5c53d744a39cb132243252904&q=${city}&aqi=no`
    const response = await fetch(url)
    const weatherData = await response.json()
    console.log(weatherData.current.condition.text)

    return new Weather(weatherData.location.region, weatherData.location.country, Math.floor(weatherData.current.temp_c), Math.floor(weatherData.current.feelslike_c), weatherData.current.wind_mph,
      weatherData.current.humidity, weatherData.current.condition.text)
  }
}

export default WeatherData