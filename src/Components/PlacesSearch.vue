<template>
  <h1>Weather Forecast</h1>
  <div class="form-group">
    <label for="location">Search for location</label>
    <input type="text" name="location" id="location">
  </div>
  <state-dropdown />
  <button>Search</button>
</template>

<script>
import stateDropdown from '@/Components/StatesDropdown'

export default {

  components : {
      stateDropdown
  },
  props: ['states.value'],
  data(){
    return{
      apiKey: '4de4a8d80078d333a4a72f1c11d87820',
      url: 'https://api.openweathermap.org/data/2.5/',
      weatherData: [],
      error: null
    }
  },
  methods: {
   
  }

}
</script>

<style>

</style>