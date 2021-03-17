<template>
  <h1>Weather Forecast</h1>
  <div class="form-group">
    <label for="location">Search for location</label>
    <input
      type="text"
      name="location"
      id="location"
      v-model="city"
      class="form-control"
    />
  </div>
  <state-dropdown @state="stateValue" />
  <button @click="fetchData()">Search</button>
</template>
<script>
import stateDropdown from '@/Components/StatesDropdown';

export default {
  components: {
    stateDropdown
  },
  data() {
    return {
      apiKey: '4de4a8d80078d333a4a72f1c11d87820',
      url: 'https://api.openweathermap.org/data/2.5/',
      currentWeather: [],
      weekForecast: [],
      error: null,
      selectedState: '',
      city: ''
    };
  },
  methods: {
    stateValue(value) {
      this.selectedState = value;
    },
    fetchData() {
      console.log(this.city + ',' + this.selectedState);
      this.getCurrentWeather();
      this.getForecast();
    },
    getCurrentWeather() {
      this.error = null;

      // Current weather data fetch
      if (
        (!this.city == '' && !this.selectedState == '') ||
        !this.city == null
      ) {
        fetch(
          `${this.url}weather?q=${this.city},${this.selectedState},US&appid=${this.apiKey}&units=imperial`
        ).then((res) => {
          if (!res.ok) {
            this.error = res.status;
          } else {
            this.currentWeather = res.json();
            console.log(this.currentWeather);
          }
        });
      }
    },
    getForecast() {
      // Forecast fetch
      if (
        (!this.city == '' && !this.selectedState == '') ||
        !this.city == null
      ) {
        fetch(
          `${this.url}forecast?q=${this.city},${this.selectedState},US&appid=${this.apiKey}&units=imperial`
        ).then((res) => {
          if (!res.ok) {
            this.error = res.status;
          } else {
            this.weekForecast = res.json();
          }
        });
      }
    }
  }
};
</script>

<style></style>
