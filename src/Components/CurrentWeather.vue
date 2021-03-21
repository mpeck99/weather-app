<template>
  <section aria-label="Weather data">
  <h2>{{ this.location }}</h2>
  <div class="card">
    <div class="card-header">
      <p>{{ this.day }}</p>
      <p>{{ this.date }}</p>
      <p>{{ this.time }}</p>
    </div>
    <div class="card-body">
      <img :src="this.icon" :alt="this.description" />
      <p class="temp">{{ this.temp }}</p>
        <p>{{ this.feelsLike }}</p>
      <p>{{ this.description }}</p>
    </div>
    <div class="card-footer">
      <p>{{ this.sunrise }}</p>
      <p>{{ this.sunset }}</p>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {}
  },
  data() {
    return {
      day: '',
      date: '',
      location: '',
      currentWeather: this.data.current,
      temp: '',
      icon: '',
      description: '',
      time: '',
      feelsLike: '',
      sunrise: '',
      sunset: ''
    };
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(weather) {
        if (weather.current != undefined) {
          this.temp =
            Math.round(weather.current.temp) + String.fromCharCode(176);
          this.day = new Date().toLocaleDateString('en-us', {
            weekday: 'long'
          });
          this.location = weather.location;
          this.date = new Date().toLocaleDateString();
          this.icon =
            'http://openweathermap.org/img/wn/' +
            weather.current.weather[0].icon +
            '.png';
          this.description = weather.current.weather[0].description;

          this.time = this.formatTime(weather.current.dt);
          this.sunrise = 'Sunrise: ' + this.formatTime(weather.current.sunrise);
          this.sunset = 'Sunset: ' + this.formatTime(weather.current.sunset);
          this.feelsLike = Math.round(weather.current.feels_like);
        }
      }
    }
  },
  methods: {
    formatTime(time) {
      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      const newTime = new Date(time * 1000)
        .toLocaleTimeString(timeOptions)
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

      return newTime;
    }
  }
};
</script>

<style lang="scss">
h2,
p {
  text-transform: capitalize;
}

.card {
  max-width: 20rem;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto;

  .card-header {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .card-body {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .card-footer {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}
</style>
