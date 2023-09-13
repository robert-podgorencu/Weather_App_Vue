import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weatherStore', {
  state: () => ({
    weatherData: null,
    latitude: 0,
    longitude: 0
  }),
  actions: {
    async fetchLocationData(locationName) {
      const url =  import.meta.env.VITE_CITY_API_URL + locationName
      try {
        const response = await axios.get(url, {
          method: 'GET',
          headers: {
            'X-Api-Key': import.meta.env.VITE_CITY_API_KEY
          }
        })
        this.latitude = response.data[0].latitude
        this.longitude = response.data[0].longitude
        await this.fetchWeatherData();
      } catch (error) {
        console.error('Error fetching location:', error)
      }
    },
    async fetchWeatherData() {
      let url = `${import.meta.env.VITE_WEATHER_API_URL}lat=${this.latitude}&lon=${this.longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
      const response = await axios.get(url)
      this.weatherData = response.data
      console.log(this.weatherData + " ")
    }
  },
  getters: {
    getWeatherData: (state) => state.weatherData,
    getLatitude: (state) => state.latitude,
    getLongitude: (state) => state.longitude
  }
})