<template>
  <h2>{{ this.location }}</h2>
  <div class="card">
    <div class="header">
      <p>{{ this.day }}</p>
      <p>{{ this.date }}</p>
    </div>
    <div class="body">
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
      day: ' ',
      date: ' ',
      location: '',
      currentWeather: this.data.current,
      temp: ' '
    };
  },
  // mounted() {
  //   this.data += '';
  // },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(weather) {
        if (weather.current != undefined) {
          this.temp = Math.round(weather.current.temp);
          this.day = new Date().toLocaleDateString('en-us', {
            weekday: 'long'
          });
          this.location = weather.location;
          this.date = new Date().toLocaleDateString();
        }
      }
    }
  }
};
</script>

<style lang="scss">
h2 {
  text-transform: capitalize;
}
</style>
