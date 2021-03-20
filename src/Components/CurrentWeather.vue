<template>
  <h2>{{ this.location }}</h2>
  <div class="card">
    <div class="header">
      <p>{{ new Date().toLocaleDateString('en-us', { weekday: 'long' }) }}</p>
      <p>{{ new Date().toLocaleDateString() }}</p>
    </div>
    <div class="body">
      <!-- <p>{{ Math.round(this.data.current.temp) }}</p> -->
      <p>{{ this.currentWeather }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      day: new Date().toLocaleDateString('en-us', { weekday: 'long' }),
      date: new Date().toLocaleDateString(),
      // temp: this.data.current.temp,
      location: this.data.location,
      currentWeather: this.data.current
    };
  }
};
</script>

<style lang="scss">
h2 {
  text-transform: capitalize;
}
</style>
