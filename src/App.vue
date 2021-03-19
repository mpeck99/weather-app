<template>
  <h1>Weather</h1>
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

.form-group {
  display: grid;
  grid-template-rows: 2rem 1fr;
  grid-template-columns: 100%;

  padding: 1rem;

  label {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .form-control {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
}
</style>
