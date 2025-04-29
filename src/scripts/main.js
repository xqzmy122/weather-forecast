import WeatherData from "./getWeatherData.js"

class WeatherApp {
  constructor() {
    
    this.city = document.querySelector('.weather__city')
    this.country = document.querySelector('.weather__country')
    this.temp = document.querySelector('.weather__degree')
    this.feelsLike = document.querySelector('.weather__feels-like')
    this.windSpeed = document.querySelector('.weather__wind-text')
    this.humidity = document.querySelector('.weather__humidity-text')
    this.searchBtn = document.querySelector('.main__search-btn')
    this.input = document.querySelector('.main__search-field')

    this.init()
  }

  async getWeatherData() {
    const weather = await WeatherData.getWeatherdata()
    console.log(weather)
    this.city.textContent = `${weather.region},`
    this.country.textContent = weather.country
    this.temp.textContent = `${weather.temp}°C`
    this.feelsLike.textContent = `${weather.feelsLike}°C`
    this.windSpeed.textContent = `${weather.windSpeed}mph`
    this.humidity.textContent = `${weather.humidity}%`
  }

  init() {
    this.searchBtn.addEventListener('click', () => this.getWeatherData())
  }
}

new WeatherApp()