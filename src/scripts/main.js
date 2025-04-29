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
    this.root = document.documentElement

    this.init()
    this.getWeatherData()
  }

  async getWeatherData() {
    const weather = await WeatherData.getWeatherdata(this.input.value)
    console.log(weather)
    this.city.textContent = `${weather.region},`
    this.country.textContent = weather.country
    this.temp.textContent = `${weather.temp}°C`
    this.feelsLike.textContent = `${weather.feelsLike}°C`
    this.windSpeed.textContent = `${weather.windSpeed}mph`
    this.humidity.textContent = `${weather.humidity}%`
    this.changeColor(weather.text)
    console.log(weather.text)
  }

  changeColor(text) {
    let gradient
    switch(text.toLowerCase()) {
      case 'sunny': 
        gradient = 'linear-gradient(337deg, #dba100 0%, #cfbe4f 100%)'
        break;
      case 'cloudy':
        gradient = 'linear-gradient(337deg, #383743 0%, #8a7e91 100%)'
        break;
      default:
        gradient = 'linear-gradient(337deg, #383743 0%, #8a7e91 100%)'
    }
    this.root.style.setProperty('--main-container-color', gradient)
  }
 
  init() {
    this.searchBtn.addEventListener('click', () => this.getWeatherData())
  }
}

new WeatherApp()
