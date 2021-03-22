<template>
  <main>
    <search @data="weather" />
    <current :data="data" :key="data" />
  </main>
  <foot />
</template>

<script>
import Search from '@/Components/PlacesSearch';
import Current from '@/Components/CurrentWeather';
import Foot from '@/Components/Footer';

export default {
  name: 'App',

  components: {
    Search,
    Current,
    Foot
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
