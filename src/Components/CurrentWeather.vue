<template>
  <h2>{{ this.location }}</h2>
  <div class="card">
    <div class="header">
      <p>{{ this.day }}</p>
      <p>{{ this.date }}</p>
      <p>{{ this.time }}</p>
    </div>
    <div class="body">
      <img :src="this.icon" :alt="this.description" />
      <p>{{ this.description }}</p>
      <p>{{ this.temp }}</p>
      <p>{{ this.currentWeather }}</p>
    </div>
  </div>
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
      time: ''
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
          const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          };
          const formatTime = new Date(weather.current.dt)
            .toLocaleTimeString(timeOptions)
            .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');
          this.time = formatTime;
        }
      }
    }
  }
};
</script>

<style lang="scss">
h2,
p {
  text-transform: capitalize;
}
</style>
