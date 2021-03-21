<template>
  <search @data="weather" />
  <current :data="data" :key="data" />
</template>

<script>
import Search from '@/Components/PlacesSearch';
import Current from '@/Components/CurrentWeather';

export default {
  name: 'App',

  components: {
    Search,
    Current
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    return this.data;
  },
  methods: {
    weather(value) {
      this.data = value;
    }
  }
};
</script>

<style lang="scss">
@import './assets/styles/styles.scss';
</style>
