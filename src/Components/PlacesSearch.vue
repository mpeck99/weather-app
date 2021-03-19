<template>
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
      coordinates: [],
      error: null,
      city: ''
    };
  },
  methods: {
    stateValue(value) {
      this.selectedState = value;
    },
    fetchData() {
      this.getCoordinates(this.getWeather);
    },
    getCoordinates(callback) {
      this.error = null;

      // Getting the coordinates
      if (
        (!this.city == '' && !this.selectedState == '') ||
        !this.city == null
      ) {
        fetch(
          `${this.url}weather?q=${this.city},${this.selectedState},US&appid=${this.apiKey}&units=imperial`
        )
          .then((res) => {
            if (!res.ok) {
              this.error = res.status;
            } else {
              return res.json();
            }
          })
          .then((data) => {
            this.coordinates = data.coord;
            callback();
          });
      }
    },
    getWeather() {
      // Getting the weather
      if (
        (!this.city == '' && !this.selectedState == '') ||
        !this.city == null
      ) {
        fetch(
          `${this.url}onecall?lat=${this.coordinates.lat}&lon=${this.coordinates.lon}&appid=${this.apiKey}&exclude=hourly,minutely&units=imperial`
        )
          .then((data) => {
            if (!data.ok) {
              this.error = data.status;
            } else {
              return data.json();
            }
          })
          .then((data) => {
            this.weekForecast = data.daily;
            this.currentWeather = data.current;
            this.location = this.city + ', ' + this.selectedState;
            this.$emit('data', {
              current: this.currentWeather,
              location: this.location
            });
          });
      }
    }
  }
};
</script>

<style></style>
