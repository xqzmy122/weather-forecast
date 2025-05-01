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
    this.changeThemeBtn = document.querySelector('.theme-btn')
    this.input = document.querySelector('.main__search-field')
    this.weatherImg = document.querySelector('.weather__img')
    this.root = document.documentElement

    this.init()
    this.getWeatherData()
  }

  async getWeatherData() {
    const weather = await WeatherData.getWeatherdata(this.input.value)
    console.log(weather)
    this.city.textContent = `${weather.name},`
    this.country.textContent = weather.country
    this.temp.textContent = `${weather.temp}°C`
    this.feelsLike.textContent = `feels like ${weather.feelsLike}°C`
    this.windSpeed.textContent = `${weather.windSpeed}mph`
    this.humidity.textContent = `${weather.humidity}%`
    this.weatherImg.setAttribute('src', weather.imageURL)
    console.log(weather.text)
  }

  changeTheme() {
    if(localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null) {
      this.root.style.setProperty('--main-container-color', '#dbdbdb')
      this.changeThemeBtn.setAttribute('src', 'src/images/moon.png')
      
      this.root.style.setProperty('--body-color', '#021024')
      localStorage.setItem('theme', 'light')
    } 
    else{
      this.root.style.setProperty('--main-container-color', '#021024')
      this.changeThemeBtn.setAttribute('src', 'src/images/sun.png')
      this.root.style.setProperty('--body-color', '#c1e8ff')
      localStorage.setItem('theme', 'dark')
    }
  }

  // changeColor(text) {
  //   let color
  //   switch(text.toLowerCase()) {
  //     case 'sunny': 
  //       color = '#52c5ff'
  //       break;
  //     case 'cloudy':
  //       color = '#95afbb'
  //       break;
  //     default:
  //       color = '#95afbb'
  //   }
  //   this.root.style.setProperty('--main-container-color', color)
  // }
 
  init() {
    this.searchBtn.addEventListener('click', () => this.getWeatherData())
    this.changeThemeBtn.addEventListener('click', () => this.changeTheme())
  }
}

new WeatherApp()
