<template>
  <div class="card">
    <p @change="currentWeather()">{{ this.data }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      currentWeather: []
    };
  },

  watch: {
    currentWeather() {
      console.log(this.data);
    }
  }
};
</script>

<style></style>
