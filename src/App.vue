<script setup>
import CurrentWeather from './components/CurrentWeather.vue'
import Search from './components/Search.vue'
import { useWeatherStore } from "./stores/store.js"

const weatherStore = useWeatherStore()

</script>

<template>
  <Search />
  <CurrentWeather v-if="weatherStore.getWeatherData !== null"/>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  margin-top: 10%;
  text-align: center;
}
</style>
